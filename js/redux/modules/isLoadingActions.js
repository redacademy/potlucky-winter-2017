const LOADING_RESOURCE = 'LOADING_RESOURCE'
const DONE_LOADING = 'DONE_LOADING'

export const loadingResource = () => ({ type: LOADING_RESOURCE })
export const doneLoading = () => ({ type: DONE_LOADING })
