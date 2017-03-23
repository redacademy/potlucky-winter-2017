import firebase from 'firebase';
import userDetails from './api/user-details';

const signUpUser = (signUpDetails) => {
  return firebase.auth()
    .createUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password)
    .then(() => {
      const uId = firebase.auth().currentUser.uid;
      const userName = {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        emailAddress: signUpDetails.email,
      };

      // userDetails insert to firebase
      userDetails.create(uId, userName);

      const signUpResult = {
        uId,
        signedIn: { signUp: true, signIn: false },
        userName,
        message: (`Sign-up successful, welcome to Pot Lucky ${signUpDetails.firstName}`),
      };

      return signUpResult;
    })
    .catch((error) => {
      const signUpResult = {
        uId: null,
        signedIn: { signUp: false, signIn: false },
        userName: {},
        message: (`Sorry, sign-up was unsuccessful. The following error has occured: ${error.code}, ${error.message}`),
      };

      return signUpResult;
    });
};

const signInUser = (signInDetails) => {
  return firebase.auth()
    .signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
    .then(() => {
      const uId = firebase.auth().currentUser.uid;

      // get userDetails from firebase and return signInResult to thunk
      return userDetails.get(uId)
        .then((result) => {
          const signInResult = {
            uId,
            signedIn: { signUp: false, signIn: true },
            userName: { firstName: result.firstName, lastName: result.lastName, email: signInDetails.email },
            message: (`Sign-in successful, welcome back to Pot Lucky ${result.firstName}`),
          };

          return signInResult;
        });
    })
    .catch((error) => {
      const signInResult = {
        uId: null,
        signedIn: { signUp: false, signIn: false },
        userName: {},
        message: (`Sorry, sign-in was unsuccessful. The following error has occured: ${error.code}, ${error.message}`),
      };

      return signInResult;
    });
};

const signOutUser = () => {
  return firebase.auth()
    .signOut()
    .then(() => {
      console.log('Sign-out successful.');
    }).catch((error) => {
      console.log(error);
    });
};

export default {
  signUpUser,
  signInUser,
  signOutUser,
};
