import React, { PropTypes } from 'react';
import { Text, Image, View } from 'react-native';
import { Overlay, OverlayText, HighlightedOverlayText } from '../../components/Overlay';
import { styles } from './styles';
import Banner from './../../components/Banner';
import LoginForm from './../../components/LoginForm';
import RoundedButton from '../../components/RoundedButton';

// const onSignInClick = () => {
//   console.log('hi');
// };

const onSignUpClick = () => {
  console.log('hi');
};

const SignInSignUpScreen = ({ navigation }) => (
    <View>
      <Banner />
      <View style={styles.hello}>
        <LoginForm onPress={() => navigation.navigate('HomeScreenNavigator')} />
        <RoundedButton text='SIGN UP' color='#ABD750' onPress={() => onSignUpClick()} />
      </View>
    </View>
  );

SignInSignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInSignUpScreen;
