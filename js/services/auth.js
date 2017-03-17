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
          uId: null,
          message: (`Sorry, sign-up was unsuccessful. The following error has occured: ${error.code}, ${error.message}`),
        };

        return signUpResult;
      });
};

export default {
  signUpUser,
};
