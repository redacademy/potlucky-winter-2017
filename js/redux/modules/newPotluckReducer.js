const newPotluckInitialState = {
  guestNumber: 0,
  potluckFood: {
    Appetizers:[] ,
    Mains: [] ,
    Salads: [] ,
    Deserts: [],
    Drinks: [],
  }
}
export default (state = newPotluckInitialState, action) => {
  switch (action.type) {
    case 'changeNumberofGuests':
      return { ...state, guestNumber: action.payload }
    case 'AddFoodGroup':
      return {...state, potluckFood} 

    default:
      return state
  }
}