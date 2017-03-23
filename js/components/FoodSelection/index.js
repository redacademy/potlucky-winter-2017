import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';

import styles from './styles';
import { potluckFood } from '../../constants';

import FoodSelectionInput from '../FoodSelectionInput';
/*
        <View key={i} style={[styles.textInputContainer, (i < count - 1) && { marginBottom: 10 }]}>
          <View style={styles.inputTextContainer}>
            <TextInput style={[styles.inputText, { backgroundColor: color }]} />
          </View>
          <View style={styles.usernameTextContainer}>
            <Text style={[styles.usernameText, { color }]}>{username}</Text>
          </View>
        </View>*/

const FoodSelection = ({ count, foodItemName, color, username }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={potluckFood.properties[foodItemName].imageSource} />

    <View style={[styles.allTextInputContainer, { borderLeftColor: color }]}>
      {[...Array(count)].map((x, i) => (
        <FoodSelectionInput key={i}
          lastItem={(i >= count - 1)}
          color={color}
          username={username}
        />
      )
      )}
    </View>

  </View >
);

export default FoodSelection;
