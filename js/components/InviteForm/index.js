import React from 'react';
import { connect } from 'react-redux';
import { TextInput, View, ScrollView, Text, TouchableHighlight } from 'react-native';
import Gandalf from 'gandalf-validator';
import EmailInviteIndicator from './../../components/EmailInviteIndicator';
import InviteEmail from './../../components/InviteEmail';
import { addInvites } from '../../redux/modules/newPotluckActions';
import { styles } from './styles';

class InviteForm extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'guestInvite0',
        component: TextInput,
        validators: ['email'],
        errorPropName: 'errorText',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Email',
          hintText: 'Email',
          style: styles.input,
          autoCapitalize: 'none',
        },
        getValueInOnChange: text => text,
        debounce: 300,
      }
    ];
    super(fields);

    this.state.ticker = 1;
    this.state.emailCount = 0;
  }

  buildTextInput = () => {
    const fields = this.state.fields;

    return Object.keys(fields).map(key => (
      <InviteEmail
        key={key}
        field={fields[key]}
      />
    ));
  }

  numberOfValidEmails = () => {
    const emailCount = this.state.emailCount;
    const validEmails = this.getCleanFormData();

    if (validEmails) {
      const validEmailCount = Object.keys(validEmails).length;
      return validEmailCount;
    } else {
      return emailCount;
    }
  }

  addEmailField = () => {
    const fields = this.state.fields;
    const lastEmailKey = Object.keys(fields).pop();
    const lastEmail = fields[lastEmailKey];

    this.setState({ emailCount: this.numberOfValidEmails() });

    if (lastEmail.value && /.+@.+\..+/.test(lastEmail.value)) {
      this.addField({
        name: `guestInvite${this.state.ticker}`,
        component: TextInput,
        validators: ['email'],
        errorPropName: 'errorText',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Email',
          hintText: 'Email',
          style: styles.input,
          autoCapitalize: 'none',
        },
        getValueInOnChange: text => text,
        debounce: 300
      });

      this.setState({ ticker: this.state.ticker + 1 });
    }
  }

  handleSubmit = () => {
    const data = this.getCleanFormData();

    if (!data) return;

    this.setState({ emailCount: this.numberOfValidEmails() });

    const formattedData = Object.keys(data)
      .map((key) => {
        return data[key].toLowerCase();
      });

    this.props.navigateTo();
    this.props.dispatch(addInvites(formattedData));
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <EmailInviteIndicator number={this.state.emailCount} />
        <ScrollView style={styles.mainContainer} >
          {this.buildTextInput()}
        </ScrollView>
        <View style={styles.buttonContainer} >
          <TouchableHighlight style={styles.primaryBtn} onPress={this.addEmailField}>
            <Text style={styles.buttonText}>New Invite</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.secondaryBtn} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default connect()(InviteForm);
