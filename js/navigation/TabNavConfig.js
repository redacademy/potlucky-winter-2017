import InfoScreen from '../scenes/InfoScreen'
import FoodScreen from '../scenes/FoodScreen'
import InvitesScreen from '../scenes/InvitesScreen'
import { colors, typography, windowWidth, windowHeight } from '../styles/baseStyles'

export const hostTabScreens = {
  Info: { screen: InfoScreen },
  Food: { screen: FoodScreen },
  Invites: { screen: InvitesScreen }
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
      width: windowWidth * .9,
      height: windowHeight * .04,
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
}

export const guestTabScreens = {
  Info: { screen: InfoScreen },
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
      width: windowWidth * .9,
      height: windowHeight * .04,
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
}