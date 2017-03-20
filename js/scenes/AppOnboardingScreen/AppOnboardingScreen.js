import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import AppOnboarding from './../../components/AppOnboarding';


const AppOnboardingScreen = () => {
  return (
    <AppOnboarding
      image={require('./../../../assets/images/foodtable.png')}
      text={'Easily organize potlucks & Share with friends and family'}
    />
  );
};

export default AppOnboardingScreen;
