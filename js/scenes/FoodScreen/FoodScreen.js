import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { colors } from '../../styles/baseStyles';

import { potluckFood } from '../../constants';

import GuestsConfirmed from '../../components/GuestsConfirmed';
import NumberOfFoodItem from '../../components/NumberOfFoodItem';
import FoodSelection from '../../components/FoodSelection';

const FoodScreen = () => (
  <View style={styles.container}>

    <View style={styles.guestsConfirmedContainer}>
      <GuestsConfirmed confirmedGuests={5} expectedGuests={14} />
    </View>

    <View style={styles.numberOfFoodItemContainer}>
      <NumberOfFoodItem count={3} foodItemName={potluckFood.APPETIZERS} color={colors.appetizerColor} />
      <NumberOfFoodItem count={8} foodItemName={potluckFood.MAINS} color={colors.mainCourseColor} />
      <NumberOfFoodItem count={20} foodItemName={potluckFood.SALADS} color={colors.saladsColor} />
    </View>

    <ScrollView>
      <FoodSelection username="Ringo"count={4} foodItemName="Appetizers" color={colors.appetizerColor} />
      <FoodSelection username="Ringo" count={2} foodItemName="Mains" color={colors.mainCourseColor} />
      <FoodSelection username="Ringo" count={6} foodItemName="Salads" color={colors.saladsColor} />
    </ScrollView>

  </View>
);

export default FoodScreen;
