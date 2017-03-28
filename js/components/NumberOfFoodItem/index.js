import React, { PropTypes } from 'react';
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
  </View>
);

NumberOfFoodItem.propTypes = {
  count: PropTypes.number.isRequired,
  foodItem: PropTypes.object.isRequired
};

export default NumberOfFoodItem;
