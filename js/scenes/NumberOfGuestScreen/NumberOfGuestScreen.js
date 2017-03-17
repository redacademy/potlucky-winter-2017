import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';


import styles from './styles';

const NumberOfGuestScreen = ({ count, onTextChange, increase, decrease }) => (
  <View>
<<<<<<< HEAD
      <View style={styles.container}>
        <TextInput
          keyboardType={'numeric'}
          style={styles.textInput}
          value={count.toString()}
          onChangeText={(text) => {
            (onTextChange(text));
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[styles.button, styles.inactive]}
            onPress={() => (increase())}
          >
            <Text> Add One </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.active]}
            onPress={() => (decrease())}
          >
            <Text> Remove One </Text>
          </TouchableHighlight>
        </View>
=======
    <View style={styles.container}>
      <TextInput
        keyboardType={'numeric'}
        style={styles.textInput}
        value={count.toString()}
        onChangeText={(text) => {
          (onTextChange(text));
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, styles.inactive]}
          onPress={() => (increase())}
        >
          <Text> Add One </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.active]}
          onPress={() => (decrease())}
        >
          <Text> Remove One </Text>
        </TouchableHighlight>
>>>>>>> added progress navigation
      </View>
    </View>
  </View >
);

export default NumberOfGuestScreen;
