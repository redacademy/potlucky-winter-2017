import React, { PropTypes } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles'

const NavigationArrow = ({ onPress, backArrow }) => (
  <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
    <Image
      source={backArrow ?
        require('../../../assets/images/back-arrow.png') :
        require('../../../assets/images/forward-arrow.png')}
    />
  </TouchableOpacity>
);

NavigationArrow.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default NavigationArrow;
