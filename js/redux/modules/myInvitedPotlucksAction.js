import { loadingResource, doneLoading } from './isLoadingActions'

export const loadMyInvitedPotlucks = myInvitedPotlucks => ({
  type: 'LOAD_MY_INVITED_POTLUCKS',
  payload: myInvitedPotlucks 
})

export const fetchMyInvitedPotlucks = () => dispatch => {
  const endpoint = ''

  dispatch(loadingResource())
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      dispatch(loadMyInvitedPotlucks(json))
      dispatch(doneLoading())
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`))
}
