import { loadingResource, doneLoading } from './isLoadingActions';

import potluckApi from '../../services/api/pot-lucks';

export const loadCurrentPotluck = potluck => ({
  type: 'LOAD_CURRENT_POTLUCK',
  payload: potluck
});

export const fetchCurrentPotluck = potluckId => (dispatch) => {
  dispatch(loadingResource());
  potluckApi.getPotluck(potluckId)
    .then((potluck) => {
      potluck.id = potluckId;
      dispatch(loadCurrentPotluck(potluck));
      dispatch(doneLoading());
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
};
