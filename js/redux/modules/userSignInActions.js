import auth from '../../services/auth';

// actions
const USER_SIGN_IN = 'USER_SIGN_IN';

// action creators
const setUserSignIn = signInData => ({
  type: USER_SIGN_IN,
  payload: signInData
});

// thunks
export const userSignUp = (signUpDetails) => {
  return (dispatch) => {
    auth.signUpUser(signUpDetails)
      .then((signUpResult) => {
        dispatch(setUserSignIn(signUpResult));
      });
  };
};

export const userSignIn = (signInDetails) => {
  return (dispatch) => {
    auth.signInUser(signInDetails)
      .then((signInResult) => {
        dispatch(setUserSignIn(signInResult));
      });
  };
};
