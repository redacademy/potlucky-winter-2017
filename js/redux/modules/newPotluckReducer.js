// initial state

const initialState = {
  potlucks: {},
  potluckFood: {
    guestCount: 0,
    courses: {},
  },
  potluckInvites: {
    emails: []
  },
};

/*
// In create potluck flow
potuckFood.courses[courseType].desiredDishCount = 10;

// In Guest flow
potuckFood.courses[courseType].assignments[userId] = 'Spring Rolls';

*/

// reducer

const newPotluckReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NUMBER_OF_GUESTS':
      return { ...state, guestCount: action.payload };
    case 'ADD_POTLUCK_ITEM':
      return { ...state, potluckFood: action.payload };
    case 'ADD_INFO':
      return { ...state, potluckInfo: action.payload };
    case 'ADD_INVITES':
      return { ...state, potluckInvites: action.payload };
    default:
      return state;
  }
};

export default newPotluckReducer;
