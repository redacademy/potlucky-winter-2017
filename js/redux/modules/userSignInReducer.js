const initialState = {
  signedIn: false,
  uId: undefined,
  signInMessage: undefined,
};

const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGN_IN':
      return { ...state, signedIn: true, uId: action.payload.uId, signInMessage: action.payload.message };
    default:
      return state;
  }
};

export default userSignInReducer;
