import React, { PropTypes } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles';

const SignInSignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.hello}>
      <Button
        onPress={() => navigation.navigate('HomeScreenNavigator')}
        title="Login"
      />
    </View>
  );
}

SignInSignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInSignUpScreen;