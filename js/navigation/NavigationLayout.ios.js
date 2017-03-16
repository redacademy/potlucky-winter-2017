/**
 * @providesModule NavigationLayout
 * @flow
 */
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'
import PotLuckInfoScreen from '../scenes/PotLuckInfoScreen'
import SignInSignUpScreen from '../scenes/SignInSignUpScreen'
import AccountScreen from '../scenes/AccountScreen'
import MyPotLucksScreen from '../scenes/MyPotlucksScreen'
import CreateNewPotLuck from './../scenes/CreatePotluckScreen'
import NumberOfGuestScreen from './../scenes/NumberOfGuestScreen'
import FoodPlanningScreen from './../scenes/FoodPlanningScreen'
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
    InvitesScreen: { screen: InvitesScreen },
    PotLuckInfoScreen: { screen: PotLuckInfoScreen },
    Login: { screen: SignInSignUpScreen },
    HomeScreenNavigator: { screen: HomeScreenNavigator },
    NumberOfGuestScreen: { screen: NumberOfGuestScreen },
    FoodPlanningScreen: { screen: FoodPlanningScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen'
  }
)