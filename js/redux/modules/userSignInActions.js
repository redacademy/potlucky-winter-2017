import auth from '../../services/auth';

// actions
const USER_SIGN_IN = 'USER_SIGN_IN';

// action creators
const setUserSignUp = signUpData => ({
  type: USER_SIGN_IN,
  payload: signUpData
});

// thunks
export const userSignUp = (signUpDetails) => {
  return (dispatch) => {
    auth
      .signUpUser(signUpDetails)
      .then((signUpResult) => {
        dispatch(setUserSignUp(signUpResult));
      });
  };
};

