import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import { POTLUCK_FOOD } from '../../constants';

import GuestsConfirmed from '../../components/GuestsConfirmed';
import NumberOfFoodItem from '../../components/NumberOfFoodItem';
import FoodSelection from '../../components/FoodSelection';
import { doesObjectPropertyExist } from '../../helpers';

const FoodScreen = ({ potluckFood }) => (
  <View style={styles.container}>
    <View style={styles.guestsConfirmedContainer}>
      <GuestsConfirmed
        confirmedGuests={
          potluckFood.food && Object.keys(potluckFood.food).reduce((acc, key) => (
            (doesObjectPropertyExist(potluckFood.food[key], 'assignments') ?
              acc + Object.keys(potluckFood.food[key].assignments).length :
              acc
            )
          ), 0)
        }
        expectedGuests={potluckFood.totalDishCount}
      />
    </View>

    <View style={styles.numberOfFoodItemContainer}>
      {potluckFood.food && Object.keys(potluckFood.food).map(key => (
        <NumberOfFoodItem
          key={key}
          count={
            potluckFood.food[key].desiredDishCount -
            (doesObjectPropertyExist(potluckFood.food[key], 'assignments') ?
              Object.keys(potluckFood.food[key].assignments).length :
              0
            )
          }
          foodItem={POTLUCK_FOOD[key]}
        />
      ))}
    </View>

    <ScrollView>
      {potluckFood.food && Object.keys(potluckFood.food).map(key => (
        <FoodSelection
          key={key}
          foodItem={POTLUCK_FOOD[key]}
          availableFoodItemCount={potluckFood.food[key].desiredDishCount -
            (doesObjectPropertyExist(potluckFood.food[key], 'assignments') ?
              Object.keys(potluckFood.food[key].assignments).length :
              0
            )
          }
          assignmentsExists={doesObjectPropertyExist(potluckFood.food[key], 'assignments')}
          potluckFood={potluckFood.food[key]}
        />
      ))}
    </ScrollView>

  </View>
);

FoodScreen.propTypes = {
  potluckFood: PropTypes.object.isRequired,
};

export default FoodScreen;
