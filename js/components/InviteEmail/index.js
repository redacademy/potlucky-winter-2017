import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const InviteEmail = ({ field }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {field.element}
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>
          {field.errorMessage && field.errorMessage}
        </Text>
      </View>
    </View>
  );
};

InviteEmail.propTypes = {
  field: PropTypes.object.isRequired,
};

export default InviteEmail;
