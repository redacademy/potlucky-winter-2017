/**
 * @providesModule NavigationLayout
 * @flow
 */

import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'

import SignInSignUpScreen from '../scenes/SignInSignUpScreen'
import AccountScreen from '../scenes/AccountScreen'
import MyPotLucksScreen from '../scenes/MyPotlucksScreen'
import CreatePotluckScreen from '../scenes/CreatePotluckScreen'

const HomeScreenNavigator = TabNavigator(
  {
    Account: { screen: AccountScreen },
    MyPotlucks: { screen: MyPotLucksScreen },
    CreatePotluck: { screen: CreatePotluckScreen },
  },
  {
    initialRouteName: 'Account',
  }
)

HomeScreenNavigator.navigationOptions = {

};

export default StackNavigator(
  {
    Login: { screen: SignInSignUpScreen },
    HomeScreenNavigator: { screen: HomeScreenNavigator },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen'
  }
)