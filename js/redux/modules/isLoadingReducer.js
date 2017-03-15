const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_RESOURCE':
      return true
    case 'DONE_LOADING':
      return false
    default:
      return state
  }
}

export default isLoadingReducer
