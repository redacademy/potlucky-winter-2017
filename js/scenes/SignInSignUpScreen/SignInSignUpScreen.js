import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import Banner from './../../components/Banner';
import LoginForm from './../../components/LoginForm';
import RoundedButton from '../../components/RoundedButton';

const SignInSignUpScreen = ({ navigation }) => (
  <View>
    <Banner />
    <View style={styles.hello}>
      <LoginForm onPress={() => navigation.navigate('HomeScreenNavigator')} />
      <RoundedButton text="SIGN UP" color="#ABD750" onPress={() => navigation.navigate('SignUp')} />
    </View>
  </View>
  );

SignInSignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInSignUpScreen;
