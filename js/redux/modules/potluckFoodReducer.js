const initialState = {};

const potluckFoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POTLUCK_FOOD':
      return action.payload;
    case 'UPDATE_POTLUCK_FOOD_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default potluckFoodReducer;
