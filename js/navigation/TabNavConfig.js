import InfoScreen from '../scenes/InfoScreen';
import FoodScreen from '../scenes/FoodScreen';
import MyPotLuckInvitesScreen from '../scenes/MyPotluckInviteScreen';
import GuestPotluckInfoScreen from '../scenes/GuestPotluckInfoScreen';
import HostPotluckInfoScreen from '../scenes/HostPotluckInfoScreen';
import { colors, typography, windowWidth, windowHeight } from '../styles/baseStyles';

export const hostTabScreens = {
  Info: { screen: HostPotluckInfoScreen },
  Food: { screen: FoodScreen },
  Invites: { screen: MyPotLuckInvitesScreen }
};

export const hostTabStyles = {
  initialRouteName: 'Info',
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: colors.mainBrandColor,
    activeBackgroundColor: colors.mainBrandColor,
    labelStyle: {
      fontSize: typography.baseFontSize,
      justifyContent: 'center',
      paddingBottom: 3,
    },
    style: {
      width: windowWidth * 0.9,
      height: windowHeight * 0.04,
      marginTop: 10,
      borderRadius: 5,
      alignSelf: 'center',
      overflow: 'hidden',
      borderWidth: 1,
      borderTopWidth: 1,
      borderColor: colors.mainBrandColor,
      borderTopColor: colors.mainBrandColor,
    }
  }
};

export const guestTabScreens = {
  Info: { screen: GuestPotluckInfoScreen },
  Food: { screen: FoodScreen },
};

export const guestTabStyles = {
  initialRouteName: 'Info',
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: colors.mainBrandColor,
    activeBackgroundColor: colors.mainBrandColor,
    labelStyle: {
      fontSize: typography.baseFontSize,
      justifyContent: 'center',
      paddingBottom: 3,
    },
    style: {
      width: windowWidth * 0.9,
      height: windowHeight * 0.04,
      marginTop: 10,
      borderRadius: 5,
      alignSelf: 'center',
      overflow: 'hidden',
      borderWidth: 1,
      borderTopWidth: 1,
      borderColor: colors.mainBrandColor,
      borderTopColor: colors.mainBrandColor,
    }
  }
};
