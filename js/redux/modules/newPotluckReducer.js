const newPotluckInitialState = {
  guestNumber: 15,
  potluckFood: {
    Appetizers: 0,
    Mains: 0,
    Salads: 0,
    Desserts: 0,
    Drinks: 0,
    ChipIn: 0,
    Talent: 0,
    Custom: 0,
  }
}
export default (state = newPotluckInitialState, action) => {
  switch (action.type) {
    case 'changeNumberofGuests':
      return { ...state,
        guestNumber: action.payload
      }
    case 'ADD_POTLUCK_ITEM':
      if (state.guestNumber) {
        return { ...state,
          guestNumber: state.guestNumber - 1,
          potluckFood: { ...state.potluckFood,
            [action.payload]: state.potluckFood[action.payload] + 1
          }
        }
      }
    default:
      return state;
  }
}