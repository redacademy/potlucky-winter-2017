import { combineReducers } from 'redux';

import myInvitedPotlucksReducer from './modules/myInvitedPotlucksReducer';
import myHostPotlucksReducer from './modules/myHostedPotlucksReducer';
import isLoadingReducer from './modules/isLoadingReducer'

export default combineReducers({
  myInvitedPotlucks: myInvitedPotlucksReducer,
  myHostPotlucks: myHostPotlucksReducer,
  isLoading: isLoadingReducer,
<<<<<<< HEAD
});
=======
});
>>>>>>> 69285a76fd8f31f1a5370af152ae5e660f19bcb5
