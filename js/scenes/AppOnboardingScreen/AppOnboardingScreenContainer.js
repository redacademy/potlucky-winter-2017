import { Button } from 'react-native';
import { colors } from './../../styles/baseStyles'
import React, { Component } from 'react';
import AppOnboardingScreen from './AppOnboardingScreen';


class AppOnboardingScreenContainer extends Component {
  static navigationOptions = {
    title: 'Regular Potlucks',
    style: {
      backgroundColor: colors.mainBrandYellow,
      height: 200,
    },
    header: ({ navigate }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <Button
          title={'Done'}
          onPress={() => navigate('PotLuckInfoScreen')}
        />
      ),
      backTitle: null,
    }),
  };
  render() {
    return (
      <AppOnboardingScreen />
    );
  }
}

export default AppOnboardingScreenContainer;
