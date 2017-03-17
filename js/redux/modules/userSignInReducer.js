const initialState = {
  signedIn: { signIn: false, signUp: false },
  uId: null,
  userName: {},
  message: null,
};

const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGN_IN':
      return {
        ...state,
        signedIn: { ...action.payload.signedIn },
        uId: action.payload.uId,
        userName: { ...action.payload.userName },
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default userSignInReducer;
