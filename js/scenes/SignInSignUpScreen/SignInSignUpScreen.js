import React, { PropTypes } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles';


import RoundedButton from '../../components/RoundedButton'

const onLoginPress = () => {
  console.log('hi')
}

const SignInSignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.hello}>
      <Button
        onPress={() => navigation.navigate('HomeScreenNavigator')}
        title="Login"
      />

      <RoundedButton text='SIGN IN' style={{marginBottom: 20}} onPress={() => onLoginPress()} />
       <RoundedButton text='SIGN UP' color='#ABD750' onPress={() => onLoginPress()} />
    </View>
  );
}

SignInSignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInSignUpScreen;