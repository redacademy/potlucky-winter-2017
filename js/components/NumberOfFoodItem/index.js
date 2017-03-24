import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const NumberOfFoodItem = ({ count, foodItem }) => (
  <View style={styles.container}>
    <View style={styles.countContainer}>
      <Text style={styles.countText}>{count}</Text>
    </View>

    <Text style={[styles.foodItemNameText, { color: foodItem.color }]}>
      {foodItem.name}
    </Text>

  </View >
);

export default NumberOfFoodItem;
