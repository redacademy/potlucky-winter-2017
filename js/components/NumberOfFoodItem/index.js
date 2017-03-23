import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const NumberOfFoodItem = ({ count, foodItemName, color }) => (
  <View style={styles.container}>
    <View style={styles.countContainer}>
      <Text style={styles.countText}>{count}</Text>
    </View>

    <Text style={[styles.foodItemNameText, { color }]}>
      {foodItemName}
    </Text>

  </View >
);

export default NumberOfFoodItem;
