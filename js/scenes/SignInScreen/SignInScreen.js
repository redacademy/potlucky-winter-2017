import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Banner from './../../components/Banner';
import SignInForm from './../../components/SignInForm';
import RoundedButton from '../../components/RoundedButton';

const SignInScreen = ({ navigation, onSignUpClick, userSignedIn }) => (
  <View>
    <Banner />
    <View style={styles.hello}>
      <SignInForm
        navigation={navigation}
        onSignUpClick={onSignUpClick}
        userSignedIn={userSignedIn}
      />
      <RoundedButton text="SIGN UP" color="#ABD750" onPress={() => navigation.navigate('SignUp')} />
    </View>
  </View>
);

SignInScreen.propTypes = {
  navigation: PropTypes.object,
  onSignUpClick: PropTypes.func.isRequired,
  userSignedIn: PropTypes.bool.isRequired
};

export default SignInScreen;
