// initial state
const initialState = {
  potluckFood: {
    guestCount: 0,
  },
};

// reducer
const newPotluckReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NUMBER_OF_GUESTS':
      return { ...state, guestCount: action.payload };
    case 'ADD_POTLUCK_ITEM':
      return { ...state, potluckFood: action.payload };
    case 'REMOVE_POTLUCK_ITEM':
      return { ...state, potluckFood: action.payload };
    case 'ADD_INFO':
      return { ...state, potluckInfo: Object.assign(action.payload, state.potluckInfo) };
    case 'ADD_INVITES':
      return { ...state, potluckInvites: action.payload };
    case 'SET_CREATE_MESSAGE':
      return { ...state, message: action.payload };
    case 'ADD_IMAGE':
      const link = action.payload.data.link;
      const pattern = /http/ig;
      const httpsLink = link.replace(pattern, 'https');
      return { ...state, potluckInfo: { ...state.potluckInfo, link: httpsLink } };
    case 'SET_INITIAL_STATE':
      return { ...state, guestCount: 0, potluckFood: {}, potluckInfo: {}, potluckInvites: {} };
    default:
      return state;
  }
};

export default newPotluckReducer;
