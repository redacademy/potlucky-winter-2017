import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';


const FoodSelectionInput = ({ count, color, username, lastItem }) => (
  <View style={[styles.textInputContainer, lastItem && { marginBottom: 0 }]}>
    <View style={styles.inputTextContainer}>
      <TextInput
        editable={!!username}
        placeholder="?"
        placeholderTextColor="#FFF"
        returnKeyType="done"
        autoCorrect={false}
        style={[styles.inputText, { backgroundColor: color }]}
      />
    </View>
    <View style={styles.usernameTextContainer}>
      <Text style={[styles.usernameText, { color }]}>{username}</Text>
    </View>
  </View>
);

export default FoodSelectionInput;
