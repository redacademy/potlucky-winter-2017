import { loadingResource, doneLoading } from './isLoadingActions';

import potluckApi from '../../services/api/pot-lucks';

export const loadPotluckFood = potluck => ({
  type: 'LOAD_POTLUCK_FOOD',
  payload: potluck || {}
});

export const fetchPotluckFood = potluckId => (dispatch) => {
  dispatch(loadingResource());
  potluckApi.getPotluckFood(potluckId)
    .then((potluck) => {
      const potluckFood = {
        food: {}
      };
      for (const prop in potluck) {
        if (prop === 'totalDishCount') {
          potluckFood[prop] = potluck[prop];
        } else {
          potluckFood.food[prop] = potluck[prop];
        }
      }
      dispatch(loadPotluckFood(potluckFood));
      dispatch(doneLoading());
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
};
