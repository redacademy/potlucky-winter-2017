import React, { Component } from 'react';
import { Button } from 'react-native';
import AppOnboardingScreen from './AppOnboardingScreen';
import { colors } from './../../styles/baseStyles';

class AppOnboardingScreenContainer extends Component {
  static navigationOptions = {
    title: 'Regular Potlucks',
    style: {
      backgroundColor: colors.mainBrandColor,
      height: 200,
    },
    header: ({ navigate }) => ({
      // Render a button on the right side of the header
      right: (
        <Button
          title={'Done'}
          onPress={() => navigate('HomeScreenNavigator')}
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
