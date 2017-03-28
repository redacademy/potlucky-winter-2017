import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from './styles';

const NumberOfGuestScreen = ({ guestImages, count, onTextChange, increase, decrease }) => (
  <View>
    <View style={styles.container}>

      <View style={styles.inputAndImagesContainer}>

        <View style={[styles.imageContainer]}>
          {guestImages.map(guestImage => guestImage)}
        </View>

        <View>
          <TextInput
            keyboardType={'numeric'}
            style={styles.textInput}
            value={count.toString()}
            onChangeText={(text) => {
              (onTextChange(text));
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={[styles.button, styles.inactive]}
          onPress={() => (decrease())}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.active]}
          onPress={() => (increase())}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  </View>
);

NumberOfGuestScreen.propTypes = {
  guestImages: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  onTextChange: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired
};

export default NumberOfGuestScreen;
