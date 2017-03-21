const initialState = {};

const myPotlucksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MY_POTLUCKS':
      return action.payload;
    default:
      return state;
  }
};

export default myPotlucksReducer;
