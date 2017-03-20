/**
 * @providesModule NavigationLayout
 * @flow
 */
import {
  StackNavigator,
  TabNavigator
<<<<<<< HEAD
} from 'react-navigation';
import PotLuckInfoScreen from '../scenes/PotLuckInfoScreen';
import SignInSignUpScreen from '../scenes/SignInSignUpScreen';
import AccountScreen from '../scenes/AccountScreen';
import MyPotLucksScreen from '../scenes/MyPotlucksScreen';
import CreateNewPotLuck from './../scenes/CreatePotluckScreen';
import NumberOfGuestScreen from './../scenes/NumberOfGuestScreen';
import FoodPlanningScreen from './../scenes/FoodPlanningScreen';
import InvitesScreen from '../scenes/InvitesScreen';
import InfoScreen from '../scenes/InfoScreen';
import { hostTabScreens, hostTabStyles, guestTabScreens, guestTabStyles } from './TabNavConfig';
import { bottomNavigatorScreens, bottomNavigatorStyles } from './BottomNavConfig';

import { colors, windowWidth } from '../styles/baseStyles'
=======
} from 'react-navigation'
import PotLuckInfoScreen from '../scenes/PotLuckInfoScreen'
import CreateNewPotLuck from './../scenes/CreatePotluckScreen'
import NumberOfGuestScreen from './../scenes/NumberOfGuestScreen'
import FoodPlanningScreen from './../scenes/FoodPlanningScreen'
import InvitesScreen from '../scenes/InvitesScreen'
import SignInSignUpScreen from '../scenes/SignInSignUpScreen';
import SignUp from '../scenes/SignUpScreen';
import AccountScreen from '../scenes/AccountScreen';
import MyPotLucksScreen from '../scenes/MyPotlucksScreen';
import { bottomNavigatorScreens, bottomNavigatorStyles } from './BottomNavConfig'
import { hostTabScreens, hostTabStyles, guestTabScreens, guestTabStyles } from './TabNavConfig';
>>>>>>> origin/develop

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
<<<<<<< HEAD
    CreatePotluckNavigator: { screen: CreatePotluckNavigator },
=======
    SignUp: { screen: SignUp },
>>>>>>> origin/develop
    HomeScreenNavigator: { screen: HomeScreenNavigator },

  },
  {
    initialRouteName: 'Login',
<<<<<<< HEAD

=======
    headerMode: 'screen',
>>>>>>> origin/develop
  }
);
