import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const NumberOfFoodItem = ({ availableFoodItemCount, foodItem }) => (
  <View style={styles.container}>
    <View style={styles.countContainer}>
      <Text style={styles.countText}>{availableFoodItemCount}</Text>
    </View>

    <Text style={[styles.foodItemNameText, { color: foodItem.color }]}>
      {foodItem.name}
    </Text>
  </View>
);

NumberOfFoodItem.propTypes = {
  availableFoodItemCount: PropTypes.number.isRequired,
  foodItem: PropTypes.object.isRequired
};

export default NumberOfFoodItem;
