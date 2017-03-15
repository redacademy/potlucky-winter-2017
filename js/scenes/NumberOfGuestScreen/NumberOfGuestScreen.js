import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native'


import styles from './styles'

const NumberOfGuestScreen = ({ text, onTextChange, onIncrease, onDecrease }) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          keyboardType={'numeric'}
          style={styles.textInput}
          value={text.toString()}
          onChangeText={(text) => {
            (onTextChange(text))
          }} />
          <View>
          
          </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[styles.button, styles.inactive]}
            onPress={() => (onIncrease())}
          >
            <Text> Add One </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.active]}
            onPress={() => (onDecrease())}
          >
            <Text> Remove One </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View >
  );
};

export default NumberOfGuestScreen;