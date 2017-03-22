import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const EmailInviteIndicator = ({ number }) => {
  return (
    <View>
      <Text>{number || 0}<Text> Invites</Text></Text>
    </View>
  );
};

EmailInviteIndicator.propTypes = {
  number: PropTypes.number.isRequired
};

export default EmailInviteIndicator;
