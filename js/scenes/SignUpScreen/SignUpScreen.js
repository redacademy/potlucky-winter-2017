import React from 'react';
import Gandalf from 'gandalf-validator';
import { View } from 'react-native';
import RoundedButton from './../../components/RoundedButton';
import ValidatedText from './../../components/ValidatedText';
import { styles } from './styles';

class SignupForm extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'fName',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          placeholder: 'First Name',
          inputStyle: styles.login,
          containerStyle: styles.container
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
      {
        name: 'lName',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          placeholder: 'Last Name',
          inputStyle: styles.login,
          containerStyle: styles.container
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
      {
        name: 'email',
        component: ValidatedText,
        validators: ['email'],
        errorPropName: 'error',
        props: {
          keyboardType: 'email-address',
          placeholder: 'Email',
          inputStyle: styles.login,
          containerStyle: styles.container,
          autoCapitalize: 'none',
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
      {
        name: 'password',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          placeholder: 'Password',
          inputStyle: styles.login,
          containerStyle: styles.container,
          secureTextEntry: true,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
    ];

    super(fields);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.userSignedUp) {
      this.props.navigation.navigate('AppOnboardingScreen');
    }
  }

  handleSubmit = () => {
    const data = this.getCleanFormData();

    if (!data) return;

    const signUpAuth = {
      email: data.email.toLowerCase().trim(),
      password: data.password.trim(),
      firstName: data.fName.trim(),
      lastName: data.lName.trim(),
    };

    this.props.onSignUpClick(signUpAuth);
  }

  render() {
    const fields = this.state.fields;

    return (
      <View style={styles.mainContainer}>
        <View>
          {fields.fName.element}
          {fields.lName.element}
          {fields.email.element}
          {fields.password.element}
        </View>
        <RoundedButton
          text="REGISTER"
          style={{ marginBottom: 20 }} 
          onPress={this.handleSubmit} 
        />
      </View>
    );
  }
}

export default SignupForm;
