import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const EmailInviteIndicator = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.invitesQuantity}>{number || 0}
        <Text style={styles.invitesText}> Invites</Text>
      </Text>
    </View>
  );
};

EmailInviteIndicator.propTypes = {
  number: PropTypes.number.isRequired
};

export default EmailInviteIndicator;
