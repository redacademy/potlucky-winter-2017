import AccountScreen from '../scenes/AccountScreen';
import MyPotLucksScreen from '../scenes/MyPotlucksScreen';
import CreatePotLuckScreen from '../scenes/CreatePotluckScreen';
import { colors, typography, windowHeight } from '../styles/baseStyles';

export const bottomNavigatorScreens = {
  Account: { screen: AccountScreen },
  MyPotlucks: { screen: MyPotLucksScreen },
  CreatePotLuck: { screen: CreatePotLuckScreen }
};

export const bottomNavigatorStyles = {
  initialRouteName: 'MyPotlucks',
  tabBarOptions: {
    activeBackgroundColor: colors.secondaryNavColor,
    labelStyle: {
      fontSize: typography.smallestFontSize,
      fontFamily: typography.fontMain,
      color: 'white',
      paddingBottom: 7
    },
    style: {
      backgroundColor: colors.primaryNavColor,
      height: windowHeight * 0.09,
    }
  }
};
