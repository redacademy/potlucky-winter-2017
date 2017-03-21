import { Button, Text } from 'react-native';
import { colors } from './../../styles/baseStyles';
import React, { Component } from 'react';
import { sendEmail, constructEmailData } from '../../helpers/email';

const message = constructEmailData(
  'Djordje_V@hotmail.com',
  'ringong95@gmail.com',
  'in app send?',
  'timmy',
  'jimmy');
class Test extends Component {
  componentDidMount() {
    sendEmail(message, 'https://api.sendgrid.com/v3/mail/send', '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');
  }
  render() {
    return (
      <Text> Hi </Text>
    );
  }
}

export default Test;
