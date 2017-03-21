import { loadingResource, doneLoading } from './isLoadingActions';

import { getPotLuck } from '../../services/api/pot-lucks';

export const loadCurrentPotluck = potluck => ({
  type: 'LOAD_CURRENT_POTLUCK',
  payload: potluck
});

export const fetchCurrentPotluck = potluckId => (dispatch) => {
  dispatch(loadingResource());
  getPotLuck(potluckId)
    .then((potluck) => {
      potluck.id = potluckId;
      dispatch(loadCurrentPotluck(potluck));
      dispatch(doneLoading());
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
};
