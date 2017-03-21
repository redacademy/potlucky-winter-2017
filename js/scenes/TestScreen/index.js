import { Button, Text } from 'react-native';
import { colors } from './../../styles/baseStyles';
import React, { Component } from 'react';
import { sendEmail } from '../../helpers/email';

const message = {
  receiver: 'Djordje_V@hotmail.com',
  sender: 'ringong95@gmail.com',
  subject: 'in app send?',
  receiverFName: 'timmy',
  receiverLName: 'jimmy'
};

class Test extends Component {
  componentDidMount() {
    sendEmail(message);
  }
  render() {
    return (
      <Text> Hi </Text>
    );
  }
}

export default Test;
