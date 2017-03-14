import React, { Component, PropTypes } from 'react';
import Gandalf from 'gandalf-validator';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

class Form extends Gandalf {
  constructor() {
    const fields = {
      name: {
        component: TextInput,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: '',
          style: styles.login
        },
        getValueInOnChange: (text) => text,
        debounce: 500,
      },

    };

    super(fields);
  }
  handleSubmit() {
    const data = this.getCleanFormData();
    if (!data) return;
    // Submit to REDUX
    console.log('goin\' to REDUX', data);
    return data;
  }
  render() {
    const fields = this.state.fields;
    return (
      <View style={styles.mainContainer} >
        <View style={styles.container} >
          <View style={styles.container} >
            {fields.name.element}
          </View>
          <View style={styles.errorContainer} >
            <Text style={styles.errorMessage}>
              {fields.name.errorMessage && fields.name.errorMessage}
            </Text>
          </View>
        </View>
        <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View >
    );
  }
}
export default Form;