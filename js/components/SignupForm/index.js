import React, { Component, PropTypes } from 'react';
import Gandalf from 'gandalf-validator';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

class Form extends Gandalf {
  constructor() {
    const fields = [{
      name: 'fName',
      component: TextInput,
      validators: ['required'],
      errorPropName: 'error',
      onChangeHandler: 'onChangeText',
      props: {
        placeholder: 'First Name',
        style: styles.login
      },
      getValueInOnChange: (text) => text,
      debounce: 500,
    }, {
      name: 'lName',
      component: TextInput,
      validators: ['required'],
      errorPropName: 'error',
      onChangeHandler: 'onChangeText',
      props: {
        placeholder: 'Last Name',
        style: styles.login
      },
      getValueInOnChange: (text) => text,
      debounce: 500,
    }, {
      name: 'email',
      component: TextInput,
      validators: ['email'],
      errorPropName: 'error',
      onChangeHandler: 'onChangeText',
      props: {
        placeholder: 'Email',
        style: styles.login
      },
      getValueInOnChange: (text) => text,
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
      getValueInOnChange: (text) => text,
      debounce: 500,
    },

    ];

    super(fields);
  }
  handleSubmit() {
    const data = this.getCleanFormData();

    if (!data) return;
    // Submit to REDUX
    console.log('goin\' to REDUX', data);
  }
  render() {
    const fields = this.state.fields;
    return (
      <View style={styles.mainContainer} >
        <View style={styles.container} >
          <View style={styles.container} >
            {fields.fName.element}
          </View>
          <View style={styles.errorContainer} >
            <Text style={styles.errorMessage}>
              {fields.fName.errorMessage && fields.fName.errorMessage}
            </Text>
          </View>
        </View>
        <View style={styles.container} >
          <View style={styles.container} >
            {fields.lName.element}
          </View>
          <View style={styles.errorContainer} >
            <Text style={styles.errorMessage}>
              {fields.lName.errorMessage && fields.lName.errorMessage}
            </Text>
          </View>
        </View>
        <View style={styles.container} >
          <View style={styles.container} >
            {fields.email.element}
          </View>
          <View style={styles.errorContainer} >
            <Text style={styles.errorMessage}>
              {fields.email.errorMessage && fields.email.errorMessage}
            </Text>
          </View>
        </View>
        <View style={styles.container} >
          <View style={styles.container} >
            {fields.password.element}
          </View>
          <View style={styles.errorContainer} >
            <Text style={styles.errorMessage}>
              {fields.password.errorMessage && fields.password.errorMessage}
            </Text>
          </View>
        </View>


        <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View >
    );
  }
}
export default Form;