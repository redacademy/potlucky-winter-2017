/**
 * @providesModule NavigationLayout
 * @flow
 */
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'
import InfoScreen from '../scenes/InfoScreen'
import SignInSignUpScreen from '../scenes/SignInSignUpScreen'
import AccountScreen from '../scenes/AccountScreen'
import MyPotLucksScreen from '../scenes/MyPotlucksScreen'
import CreateNewPotLuck from './../scenes/CreatePotluckScreen'
import NumberOfGuestScreen from './../scenes/NumberOfGuestScreen'
import FoodScreen from './../scenes/FoodScreen'
import InvitesScreen from '../scenes/InvitesScreen'
import { hostTabScreens, hostTabStyles, guestTabScreens, guestTabStyles } from './TabNavConfig'
import { bottomNavigatorScreens, bottomNavigatorStyles } from './BottomNavConfig'

const HostTabNavigator = TabNavigator(hostTabScreens, hostTabStyles);

const GuestTabNavigator = TabNavigator(guestTabScreens, guestTabStyles);

const BottomNavigator = TabNavigator(bottomNavigatorScreens, bottomNavigatorStyles)

const HomeScreenNavigator = TabNavigator(
  {
    Account: { screen: AccountScreen },
    MyPotlucks: { screen: MyPotLucksScreen },
    CreatePotluck: { screen: CreateNewPotLuck },
  },
  {
    initialRouteName: 'Account',
  }
)


BottomNavigator.navigationOptions = {

};

export default StackNavigator(
  {
    InvitesScreen: {screen: InvitesScreen},
    InfoScreen: { screen: InfoScreen },
    Login: { screen: SignInSignUpScreen },

    HomeScreenNavigator: { screen: HomeScreenNavigator },
    NumberOfGuestScreen: { screen: NumberOfGuestScreen },
    FoodScreen: { screen: FoodScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen'
  }
)