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
        errorPropName: 'errorText',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Email',
          hintText: 'Email',
          style: styles.input
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }
    ];
    super(fields);

    this.state.ticker = 1;
  }

  addEmailField() {
    this.addField({
      name: `email${this.state.ticker}`,
      component: TextInput,
      validators: ['email'],
      errorPropName: 'errorText',
      onChangeHandler: 'onChangeText',
      props: {
        placeholder: 'Email',
        hintText: 'Email',
        style: styles.input,
      },
      getValueInOnChange: text => text,
      debounce: 300
    });
    this.setState({ ticker: this.state.ticker + 1 });
  }
  buildTextInput() {
    const fields = this.state.fields;
    return Object.keys(fields).map(key => (
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
    ));
  }
  handleSubmit() {
    const data = this.getFormData();
    if (!data) return;
    // Submit to REDUX
    console.log('goin\' to REDUX', data);
    // TODO Add redux support for this data
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.mainContainer} >
          {this.buildTextInput()}
        </ScrollView >
        <View style={styles.buttoncontainer} >
          <TouchableHighlight style={styles.button} onPress={() => this.addEmailField()}>
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
