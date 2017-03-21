import React from 'react';
import Gandalf from 'gandalf-validator';
import { TextInput, View, Text } from 'react-native';
import { styles } from './../../styles/formStyles';
import RoundedButton from './../RoundedButton';

class SignInForm extends Gandalf {
  constructor() {
    const fields = [
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
      }, {
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
        <View style={styles.container}>
          <View style={styles.container}>
            {fields.email.element}
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
              {fields.email.errorMessage && fields.email.errorMessage}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.container}>
            {fields.password.element}
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
              {fields.password.errorMessage && fields.password.errorMessage}
            </Text>
          </View>
        </View>
        <RoundedButton text="SIGN IN" style={{ marginBottom: 20 }} onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;
