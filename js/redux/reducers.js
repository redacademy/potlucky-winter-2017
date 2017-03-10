import { combineReducers } from 'redux';

import { NavigationReducer } from '@exponent/ex-navigation';
import helloReducer from './modules/hello';

export default combineReducers({
  navigation: NavigationReducer,
  hello: helloReducer
});