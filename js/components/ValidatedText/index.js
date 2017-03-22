import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const ValidatedText = ({ errorMessage }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>
        {errorMessage && errorMessage}
      </Text>
    </View>
  )
}



export default ValidatedText;