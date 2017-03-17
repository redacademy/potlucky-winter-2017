import React, { PropTypes } from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const SingleFlatButton = ({ title, color }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} color={color} />
    </View>
  );
};
SingleFlatButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default SingleFlatButton;
