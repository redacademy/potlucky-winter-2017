import React, { Component } from 'react';
import { Button } from 'react-native';
import AppOnboardingScreen from './AppOnboardingScreen';
import NavigationArrow from './../../components/NavigationArrow';
import { colors, typography } from './../../styles/baseStyles';

class AppOnboardingScreenContainer extends Component {
  static navigationOptions = {
    title: 'Regular Potlucks',
    style: {
      backgroundColor: colors.mainBrandColor,
    },
    header: ({ navigate }) => ({
      style: { backgroundColor: colors.mainBrandColor, paddingLeft: 20, paddingRight: 20 },
      titleStyle: { color: 'white', fontFamily: typography.fontMain },
      // Render a button on the right side of the header
      right: (
        <Button
          title={'Done'}
          style={{
            color: 'white', fontFamily: typography.fontMain
          }}

          onPress={() => navigate('HomeScreenNavigator')}
        />
      ),
      left: (
        <NavigationArrow
          backArrow
          onPress={() => goBack(null)}
        />
      )
    }),
  };

  render() {
    return (
      <AppOnboardingScreen />
    );
  }
}

export default AppOnboardingScreenContainer;
