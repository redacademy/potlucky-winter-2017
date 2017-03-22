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
        component: TextInput,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'First Name',
          style: styles.login
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
      {
        name: 'lName',
        component: TextInput,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Last Name',
          style: styles.login

        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
      {
        name: 'email',
        component: TextInput,
        validators: ['email'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Email',
          style: styles.login
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
      {
        name: 'password',
        component: TextInput,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
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
          <View style={styles.container}>
            <View style={styles.container}>
              {fields.fName.element}
            </View>
            <ValidatedText errorMessage={fields.fName.errorMessage} />
          </View>
          <View style={styles.container}>
            <View style={styles.container}>
              {fields.lName.element}
            </View>
            <ValidatedText errorMessage={fields.lName.errorMessage} />
          </View>
          <View style={styles.container}>
            <View style={styles.container}>
              {fields.email.element}
            </View>
            <ValidatedText errorMessage={fields.email.errorMessage} />
          </View>
          <View style={styles.container}>
            <View style={styles.container}>
              {fields.password.element}
            </View>
            <ValidatedText errorMessage={fields.password.errorMessage} />
          </View>
        </View>

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignupForm;
