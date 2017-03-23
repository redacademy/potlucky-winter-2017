import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';

import styles from './styles';
import { POTLUCK_FOOD } from '../../constants';

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

const FoodSelection = ({ count, foodItem, username }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={foodItem.imageSource} />

    <View style={[styles.allTextInputContainer, { borderLeftColor: foodItem.color }]}>
      {[...Array(count)].map((x, i) => (
        <FoodSelectionInput key={i}
          lastItem={(i >= count - 1)}
          color={foodItem.color}
          username={username}
        />
      )
      )}
    </View>

  </View >
);

export default FoodSelection;
