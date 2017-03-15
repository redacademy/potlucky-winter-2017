const initialState = {
  sessionData: [],
}

const myInvitedPotlucksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MY_INVITED_POTLUCKS':
      return action.payload
    default:
      return state
  }
}

export default myInvitedPotlucksReducer
