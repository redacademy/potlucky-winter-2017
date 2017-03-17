/**
 * @providesModule NavigationLayout
 * @flow
 */
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import PotLuckInfoScreen from '../scenes/PotLuckInfoScreen';
import SignInScreen from '../scenes/SignInScreen';
import SignUpScreen from '../scenes/SignUpScreen';
import AccountScreen from '../scenes/AccountScreen';
import MyPotLucksScreen from '../scenes/MyPotlucksScreen';
import CreateNewPotLuck from './../scenes/CreatePotluckScreen';
import NumberOfGuestScreen from './../scenes/NumberOfGuestScreen';
import FoodPlanningScreen from './../scenes/FoodPlanningScreen';
import InvitesScreen from '../scenes/InvitesScreen';
import AppOnboardingScreen from '../scenes/AppOnboardingScreen';
import { hostTabScreens, hostTabStyles, guestTabScreens, guestTabStyles } from './TabNavConfig';
import { bottomNavigatorScreens, bottomNavigatorStyles } from './BottomNavConfig';
import { colors, windowWidth } from '../styles/baseStyles'

const HostTabNavigator = TabNavigator(hostTabScreens, hostTabStyles);

const GuestTabNavigator = TabNavigator(guestTabScreens, guestTabStyles);

const BottomNavigator = TabNavigator(bottomNavigatorScreens, bottomNavigatorStyles);

const HomeScreenNavigator = TabNavigator(
  {
    Account: { screen: AccountScreen },
    MyPotlucks: { screen: MyPotLucksScreen },
    CreatePotluck: { screen: CreateNewPotLuck },
  },
  {
    initialRouteName: 'Account',
  }
);


BottomNavigator.navigationOptions = {

};


const CreatePotluckNavigator = TabNavigator(
  {
    NumberOfGuestScreen: { screen: NumberOfGuestScreen },
    FoodPlanningScreen: { screen: FoodPlanningScreen },
    PotLuckInfoScreen: { screen: PotLuckInfoScreen },
    InvitesScreen: { screen: InvitesScreen },
  },
  {
    initialRouteName: 'NumberOfGuestScreen',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: { height: 0 }
    }
  }
);

export default StackNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    CreatePotluckNavigator: { screen: CreatePotluckNavigator },
    HomeScreenNavigator: { screen: HomeScreenNavigator },
    AppOnboardingScreen: { screen: AppOnboardingScreen },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'screen',
  }
);
