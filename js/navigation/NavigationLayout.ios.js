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
import { hostTabScreens, hostTabStyles, guestTabScreens, guestTabStyles } from './TabNavConfig'
import { bottomNavigatorScreens, bottomNavigatorStyles } from './BottomNavConfig'

const HostTabNavigator = TabNavigator(hostTabScreens, hostTabStyles);

const GuestTabNavigator = TabNavigator(guestTabScreens, guestTabStyles);

const BottomNavigator = TabNavigator(bottomNavigatorScreens, bottomNavigatorStyles)

BottomNavigator.navigationOptions = {

};

export default StackNavigator(
  {
    Login: { screen: SignInSignUpScreen },
    HomeScreenNavigator: { screen: BottomNavigator },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen'
  }
)