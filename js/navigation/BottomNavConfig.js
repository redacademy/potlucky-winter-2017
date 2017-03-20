import AccountScreen from '../scenes/AccountScreen';
import MyPotLucksScreen from '../scenes/MyPotlucksScreen';
import CreatePotLuckScreen from '../scenes/CreatePotluckScreen';
import { colors, typography, windowHeight } from '../styles/baseStyles';

export const bottomNavigatorScreens = {
  Info: { screen: AccountScreen },
  Food: { screen: MyPotLucksScreen },
  CreatePotLuck: { screen: CreatePotLuckScreen }
};

export const bottomNavigatorStyles = {
  initialRouteName: 'Info',
  tabBarOptions: {
    activeBackgroundColor: colors.secondaryNavColor,
    labelStyle: {
      fontSize: typography.smallestFontSize,
      color: 'white',
      paddingBottom: 8
    },
    style: {
      backgroundColor: colors.primaryNavColor,
      height: windowHeight * 0.09,
    }
  }
};
