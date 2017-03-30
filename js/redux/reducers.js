import { combineReducers } from 'redux';

import myPotlucksReducer from './modules/myPotlucksReducer';
import isLoadingReducer from './modules/isLoadingReducer';
import userSignInReducer from './modules/userSignInReducer';
import newPotluckReducer from './modules/newPotluckReducer';
import currentPotluckReducer from './modules/currentPotluckReducer';
import potluckFoodReducer from './modules/potluckFoodReducer';
import messageReducer from './modules/messageReducer';

export default combineReducers({
  myPotlucks: myPotlucksReducer,
  isLoading: isLoadingReducer,
  userSignIn: userSignInReducer,
  newPotluck: newPotluckReducer,
  currentPotluck: currentPotluckReducer,
  potluckFood: potluckFoodReducer,
  message: messageReducer,
});
