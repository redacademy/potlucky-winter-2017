import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const SingleFlatButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Looks Good" color="white" />
    </View>
  );
};

export default SingleFlatButton;
