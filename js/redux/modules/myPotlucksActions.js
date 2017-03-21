import { loadingResource, doneLoading } from './isLoadingActions';

import { getUserPotLucks } from '../../services/api/pot-lucks';
import { addIdToObject } from '../../helpers';

export const loadMyPotlucks = myPotlucks => ({
  type: 'LOAD_MY_POTLUCKS',
  payload: myPotlucks
});

export const fetchMyPotlucks = userId => (dispatch) => {
  dispatch(loadingResource());
  getUserPotLucks(userId)
    .then((myPotlucks) => {
      addIdToObject(myPotlucks);
      dispatch(loadMyPotlucks(myPotlucks));
      dispatch(doneLoading());
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
};
