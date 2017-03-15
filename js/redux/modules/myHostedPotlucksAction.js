import { loadingResource, doneLoading } from './isLoadingActions'

export const loadMyHostedPotlucks = myHostedPotlucks => ({
  type: 'LOAD_MY_HOSTED_POTLUCKS',
  payload: myHostedPotlucks 
})

export const fetchMyHostedPotlucks = () => dispatch => {
  const endpoint = ''

  dispatch(loadingResource())
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      dispatch(loadMyHostedPotlucks(json))
      dispatch(doneLoading())
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`))
}
