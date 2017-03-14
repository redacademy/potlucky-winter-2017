import React, { PropTypes } from 'react';
import { Text, Image, View, Button } from 'react-native';
import { Overlay, OrangeText, WhiteText } from '../../components/Overlay'
import { styles } from './styles';
import SignUpForm from './../../components/SignupForm'
import LoginForm from './../../components/LoginForm'

const SignInSignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.hello}>
      <Button
        onPress={() => navigation.navigate('HomeScreenNavigator')}
        title="Login"
      />
      <Overlay>
        <Image style={{ marginBottom: 20 }} source={require('../../../assets/images/Drag-Down-icon.png')} />
        <OrangeText>Great, to see you there!</OrangeText>
        <WhiteText>
          Please fill out the food form{'\n'}
          and let the host know{'\n'}
           what you'll be bringing.
        </WhiteText>
      </Overlay>
    </View>
  );
}

SignInSignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInSignUpScreen;