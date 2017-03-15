const initialState = {};

const currentPotluckReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CURRENT_POTLUCK':
      return action.payload;
    default:
      return state;
  }
};

export default currentPotluckReducer;
