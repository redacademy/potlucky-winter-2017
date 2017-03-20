import { combineReducers } from 'redux';

import myInvitedPotlucksReducer from './modules/myInvitedPotlucksReducer';
import myHostPotlucksReducer from './modules/myHostedPotlucksReducer';
import isLoadingReducer from './modules/isLoadingReducer';
import userSignInReducer from './modules/userSignInReducer';
import newPotluckReducer from './modules/newPotluckReducer'

export default combineReducers({
  myInvitedPotlucks: myInvitedPotlucksReducer,
  myHostPotlucks: myHostPotlucksReducer,
  isLoading: isLoadingReducer,
  userSignIn: userSignInReducer,
  newPotluck: newPotluckReducer,
});
