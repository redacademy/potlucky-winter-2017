import React from 'react';
import Gandalf from 'gandalf-validator';
import { TextInput, View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

class InviteForm extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'email0',
        component: TextInput,
        validators: ['email'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Email',
          style: styles.input
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }
    ];
    super(fields);

    this.state.ticker = 1;
  }

  addingFields() {
    this.addField({
      name: `email${this.state.ticker}`,
      component: TextInput,
      validators: ['email'],
      errorPropName: 'errorText',
      props: {
        placeholder: 'Email',
        hintText: 'Email',
        style: styles.input,
      },
      debounce: 300
    });

    this.setState({ ticker: this.state.ticker + 1 });
  }

  handleSubmit() {
    const data = this.getFormData();
    if (!data) return;
    // Submit to REDUX
    console.log('goin\' to REDUX', data);
    // TODO Add redux support for this data
  }
  render() {
    const fields = this.state.fields;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.mainContainer} >
          {Object.keys(fields).map(key => (
            <View key={key} style={styles.container} >
              <View style={styles.inputcontainer} >
                {fields[key].element}
              </View>
              <View style={styles.errorContainer} >
                <Text style={styles.errorMessage}>
                  {fields[key].errorMessage && fields[key].errorMessage}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView >
        <View style={styles.buttoncontainer} >
          <TouchableHighlight style={styles.button} onPress={() => this.addingFields()}>
            <Text style={styles.buttonText}>Add More Fields</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}>
            <Text style={styles.buttonText}>Invite</Text>
          </TouchableHighlight>
        </View>
      </View >
    );
  }
}
export default InviteForm;
