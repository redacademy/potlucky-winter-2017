// initial state

const initialState = {
  potLucks: {
    userId: null,
    title: null,
    theme: null,
    eventDate: null,
    arriveTime: null,
    serveTime: null,
    location: null,
    description: null
  },
  potLuckFood: {
    dishCount: 0
  },
  potLuckInvites: {
    emails: []
  },
};

// reducer

const newPotluckReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GUESTS':
      return { ...state, dishCount: action.payload.potLuckFood.dishCount };
    case 'ADD_FOOD':
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
