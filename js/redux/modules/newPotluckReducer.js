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
      return { ...state, potLuckFood: action.payload.potLuckFood };
    case 'ADD_INFO':
      return { ...state, potLuckInfo: action.payload.potLucks };
    case 'ADD_INVITES':
      return { ...state, potLuckInvites: action.payload.potLuckInvites };
    default:
      return state;
  }
};

export default newPotluckReducer;
