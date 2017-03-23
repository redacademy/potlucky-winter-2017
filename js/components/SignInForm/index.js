import React from 'react';
import Gandalf from 'gandalf-validator';
import { View } from 'react-native';
import { styles } from './../../styles/formStyles';
import RoundedButton from './../RoundedButton';
import ValidatedText from './../ValidatedText'

class SignInForm extends Gandalf {
  constructor() {
    const fields = [
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
    if (nextProps.userSignedIn) {
      this.props.navigation.navigate('HomeScreenNavigator');
    }
  }

  handleSubmit = () => {
    const data = this.getCleanFormData();

    if (!data) return;

    this.props.onSignUpClick(data);
  }

  render() {
    const fields = this.state.fields;

    return (
      <View style={styles.mainContainer}>
        {fields.email.element}
        {fields.password.element}
        <RoundedButton text="SIGN IN" style={{ marginBottom: 20 }} onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;
