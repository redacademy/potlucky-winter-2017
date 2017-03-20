/**
 * @providesModule NavigationLayout
 * @flow
 */
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import PotLuckInfoScreen from '../scenes/PotLuckInfoScreen';
import SignInSignUpScreen from '../scenes/SignInSignUpScreen';
import AccountScreen from '../scenes/AccountScreen';
import MyPotLucksScreen from '../scenes/MyPotlucksScreen';
import CreateNewPotLuck from './../scenes/CreatePotluckScreen';
import NumberOfGuestScreen from './../scenes/NumberOfGuestScreen';
import FoodPlanningScreen from './../scenes/FoodPlanningScreen';
import InvitesScreen from '../scenes/InvitesScreen';
import AppOnboardingScreen from '../scenes/AppOnboardingScreen';
import { hostTabScreens, hostTabStyles, guestTabScreens, guestTabStyles } from './TabNavConfig';
import { bottomNavigatorScreens, bottomNavigatorStyles } from './BottomNavConfig';

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

    PotLuckInfoScreen: { screen: PotLuckInfoScreen },
    Login: { screen: SignInSignUpScreen },
    CreatePotluckNavigator: { screen: CreatePotluckNavigator },
    // SignUp: { screen: SignUp },
    HomeScreenNavigator: { screen: BottomNavigator },
    NumberOfGuestScreen: { screen: NumberOfGuestScreen },
    FoodPlanningScreen: { screen: FoodPlanningScreen },
    AppOnboardingScreen: { screen: AppOnboardingScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
  }
);
