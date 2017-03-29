const initialState = {};

const currentPotluckReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CURRENT_POTLUCK':
      return action.payload;
    case 'GET_POTLUCK_GUESTS':
      return { ...state, potluckGuests: action.payload };
    default:
      return state;
  }
};

export default currentPotluckReducer;
