/**
 * @providesModule NavigationLayout
 * @flow
 */
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'
import { Dimensions } from 'react-native'
import SignInSignUpScreen from '../scenes/SignInSignUpScreen'
import AccountScreen from '../scenes/AccountScreen'
import MyPotLucksScreen from '../scenes/MyPotlucksScreen'
import CreatePotluckScreen from '../scenes/CreatePotluckScreen'
import { colors, typography } from '../styles/baseStyles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const InputFoodTopTabNavigator = TabNavigator(
  {
    Info: { screen: AccountScreen },
    Food: { screen: MyPotLucksScreen },
  },
  {
    initialRouteName: 'Info',
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'orange',
      style: {
        width: width*.9,
        height:height*.04,
        marginTop: 10,
        borderRadius: 7,
        alignSelf:'center',
        overflow: 'hidden',
        }
      }
    }
)

const HomeScreenNavigator = TabNavigator(
  {
    Account: { screen: AccountScreen },
    MyPotlucks: { screen: MyPotLucksScreen },
    CreatePotluck: { screen: InputFoodTopTabNavigator },
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