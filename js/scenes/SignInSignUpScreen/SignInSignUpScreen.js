import React, { PropTypes } from 'react';
import { Text, Image, View, Button } from 'react-native';
import { Overlay, OverlayText, HighlightedOverlayText } from '../../components/Overlay'
import { styles } from './styles';
// import SignUpForm from './../../components/SignupForm'
// import LoginForm from './../../components/LoginForm'

import RoundedButton from '../../components/RoundedButton'

/* const onSignInClick = () => {
  console.log('sign-in');
}

const onSignUpClick = () => {
  this.props.navigation.navigate('SignUp');
}*/

const SignInSignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.hello}>
      <Button
        onPress={() => navigation.navigate('HomeScreenNavigator')}
        title="Login"
      />

      <RoundedButton text='SIGN IN' style={{marginBottom: 20}} onPress={() => navigation.navigate('SignIn')} />
      <RoundedButton text='SIGN UP' color='#ABD750' onPress={() => navigation.navigate('SignUp')} />

      <Overlay>
        <Image style={{ marginBottom: 20 }} source={require('../../../assets/images/Drag-Down-icon.png')} />
        <HighlightedOverlayText style={{fontSize: 25}}>Great, to see you there!</HighlightedOverlayText>
        <OverlayText>
          Please fill out the food form{'\n'}
          and let the host know{'\n'}
          what you'll be bringing.
        </OverlayText>
      </Overlay>
    </View>
  );
}

SignInSignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInSignUpScreen;