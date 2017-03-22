import React from 'react';
import Gandalf from 'gandalf-validator';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';
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
          style: styles.login
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
          style: styles.login

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
          placeholder: 'Email',
          style: styles.login
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
          style: styles.login
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
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignupForm;
