import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import { POTLUCK_FOOD } from '../../constants';

import GuestsConfirmed from '../../components/GuestsConfirmed';
import NumberOfFoodItem from '../../components/NumberOfFoodItem';
import FoodSelection from '../../components/FoodSelection';

import { doesObjectPropertyExist } from '../../helpers';

const FoodScreen = ({ potluckFood, availableFoodItemCount, confirmedGuests }) => (
  <View style={styles.container}>
    <View style={styles.guestsConfirmedContainer}>
      <GuestsConfirmed
        confirmedGuests={confirmedGuests}
        expectedGuests={potluckFood.totalDishCount}
      />
    </View>

    <View style={styles.numberOfFoodItemContainer}>
      {potluckFood.food && Object.keys(potluckFood.food).map(key => (
        <NumberOfFoodItem
          key={key}
          availableFoodItemCount={availableFoodItemCount(potluckFood, key)}
          foodItem={POTLUCK_FOOD[key]}
        />
      ))}
    </View>

    <ScrollView>
      {potluckFood.food && Object.keys(potluckFood.food).map(key => (
        <FoodSelection
          key={key}
          foodItem={POTLUCK_FOOD[key]}
          availableFoodItemCount={availableFoodItemCount(potluckFood, key)}
          assignmentsExists={doesObjectPropertyExist(potluckFood.food[key], 'assignments')}
          potluckFood={potluckFood.food[key]}
        />
      ))}
    </ScrollView>

  </View>
);

FoodScreen.propTypes = {
  potluckFood: PropTypes.object.isRequired,
  availableFoodItemCount: PropTypes.func.isRequired,
  confirmedGuests: PropTypes.number.isRequired,
};

export default FoodScreen;
