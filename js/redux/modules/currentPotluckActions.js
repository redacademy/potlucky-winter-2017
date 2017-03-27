import { loadingResource, doneLoading } from './isLoadingActions';

import potluckActions from '../../services/api/pot-lucks';

export const loadCurrentPotluck = potluck => ({
  type: 'LOAD_CURRENT_POTLUCK',
  payload: potluck
});

export const fetchCurrentPotluck = potluckId => (dispatch) => {
  dispatch(loadingResource());
  potluckActions.getPotluck(potluckId)
    .then((potluck) => {
      potluck.id = potluckId;
      dispatch(loadCurrentPotluck(potluck));
      dispatch(doneLoading());
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
};
