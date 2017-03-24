import React, { PropTypes } from 'react';
import {
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import { colors } from '../../styles/baseStyles';
import styles from './styles';

const RoundedButton = ({ text, onPress, style, color = colors.mainBrandColor }) => (
    <View style={[styles.buttonShape, styles.buttonView, { backgroundColor: color, shadowColor: color, marginBottom: 8}, style]}>
      <TouchableHighlight
        style={[styles.buttonShape]}
        onPress={onPress}
        underlayColor='#FFF'
        activeOpacity={0.3}
      >
        <View style={[styles.buttonShape, styles.textContainer, { backgroundColor: color }]}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>

      </TouchableHighlight>
    </View>

  );

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  dropShadow: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.object,
};
export default RoundedButton;
