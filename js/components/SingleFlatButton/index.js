import React, { PropTypes } from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const SingleFlatButton = ({ title, backgroundColor, onPress }) => (
  <View style={[styles.buttonContainer, { backgroundColor }]}>
    <Button style={styles.button} title={title} color="#fff" onPress={onPress} />
  </View>
);

SingleFlatButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default SingleFlatButton;
