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

const FoodScreen = ({ userId, userName, potluckFood, isLoading }) => (
  <View style={styles.container}>

    <View style={styles.guestsConfirmedContainer}>
      <GuestsConfirmed confirmedGuests={5} expectedGuests={potluckFood.totalDishCount} />
    </View>

    <View style={styles.numberOfFoodItemContainer}>
      {potluckFood.food && Object.keys(potluckFood.food).map(key => (
        <NumberOfFoodItem
          key={key}
          count={potluckFood.food[key].desiredDishCount}
          foodItem={POTLUCK_FOOD[key]}
        />
      ))}
    </View>

    <ScrollView>
      {potluckFood.food && Object.keys(potluckFood.food).map(key => (
        <FoodSelection
          key={key}
          username={potluckFood.food[key].username || ''}
          count={potluckFood.food[key].desiredDishCount}
          foodItem={POTLUCK_FOOD[key]}
        />
      ))}
    </ScrollView>

  </View>
);

export default FoodScreen;
