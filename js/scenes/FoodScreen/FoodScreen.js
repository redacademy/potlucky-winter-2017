import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { colors } from '../../styles/baseStyles';

import { POTLUCK_FOOD } from '../../constants';

import GuestsConfirmed from '../../components/GuestsConfirmed';
import NumberOfFoodItem from '../../components/NumberOfFoodItem';
import FoodSelection from '../../components/FoodSelection';

const FoodScreen = () => (
  <View style={styles.container}>

    <View style={styles.guestsConfirmedContainer}>
      <GuestsConfirmed confirmedGuests={5} expectedGuests={14} />
    </View>

    <View style={styles.numberOfFoodItemContainer}>
      <NumberOfFoodItem count={4} foodItem={POTLUCK_FOOD.APPETIZERS} />
      <NumberOfFoodItem count={2} foodItem={POTLUCK_FOOD.MAINS} />
      <NumberOfFoodItem count={6} foodItem={POTLUCK_FOOD.SALADS} />
    </View>

    <ScrollView>
      <FoodSelection username="Ringo"count={4} foodItem={POTLUCK_FOOD.APPETIZERS} />
      <FoodSelection username="Ringo" count={2} foodItem={POTLUCK_FOOD.MAINS} />
      <FoodSelection username="Ringo" count={6} foodItem={POTLUCK_FOOD.SALADS} />
    </ScrollView>

  </View>
);

export default FoodScreen;
