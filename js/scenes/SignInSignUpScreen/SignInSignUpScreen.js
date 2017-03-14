import React, { PropTypes } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles';
import GenericForm from './../../components/GenericForm'
import SignUpForm from './../../components/SignupForm'
import LoginForm from './../../components/LoginForm'

const SignInSignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.hello}>

      <View style={{
        flex: 1,
        height: 500,
        width: 200,
      }}>
        <LoginForm/>
        <SignUpForm/>
        <GenericForm />
      </View>
    </View>
  );
}

SignInSignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInSignUpScreen;