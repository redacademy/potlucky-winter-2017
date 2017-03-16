import firebase from 'firebase';
import userDetails from './api/user-details';

const signUpUser = (signUpDetails) => {
  return firebase.auth()
    .createUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password)
      .then(() => {
        const uId = firebase.auth().currentUser.uid;
        const userName = { firstName: signUpDetails.firstName, lastName: signUpDetails.lastName };

        // add insert to firebase userDetails
        userDetails.create(uId, userName);

        const signUpResult = {
          uId,
          message: (`Sign-up successful, welcome to Pot Lucky ${signUpDetails.firstName}`),
        };

        return signUpResult;
      })
      .catch((error) => {
        const signUpResult = {
          uId: undefined,
          message: (`Sorry, sign-up was unsuccessful. The following error has occured: ${error.code}, ${error.message}`),
        };

        return signUpResult;
      });
};

/* export const signInUser = (signInDetails) => {
  // console.log(signUpDetails);

  firebase.auth().signInWithEmailAndPassword(signInDetails.email, signInDetails.password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage);
    // ...
  });
};*/

/*
firebase.auth().signOut()
  .then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
});
*/

export default {
  signUpUser,
};
