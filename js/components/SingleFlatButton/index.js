import React, { PropTypes } from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const SingleFlatButton = ({ title, color, onPress }) => (
  <View style={styles.buttonContainer}>
    <Button title={title} color={color} onPress={onPress} />
  </View>
);

SingleFlatButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SingleFlatButton;
