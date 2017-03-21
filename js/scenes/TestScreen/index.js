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
    sendEmail(message);
  }
  render() {
    return (
      <Text> Hi </Text>
    );
  }
}

export default Test;
