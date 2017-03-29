import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import FoodSelectionInput from '../FoodSelectionInput';

const FoodSelection = ({ foodItem, potluckFood, availableFoodItemCount, assignmentsExists }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={foodItem.imageSource} />

    <View style={[styles.allTextInputContainer, { borderLeftColor: foodItem.color }]}>
      {assignmentsExists &&
        Object.values(potluckFood.assignments).map((foodItemData, i) => (
          <FoodSelectionInput
            key={`user${i}`}
            color={foodItem.color}
            displayUsername={foodItemData.displayName}
            displayDishName={foodItemData.dish}
            foodItem={foodItem}
          />
        )
        )
      }

      {[...Array(availableFoodItemCount)].map((x, i) => (
        <FoodSelectionInput
          key={`empty${i}`}
          color={foodItem.color}
          displayUsername=""
          displayDishName=""
          foodItem={foodItem}
        />
      )
      )}
    </View>

  </View >
);

FoodSelection.propTypes = {
  foodItem: PropTypes.object.isRequired,
  potluckFood: PropTypes.object.isRequired,
  availableFoodItemCount: PropTypes.number.isRequired,
  assignmentsExists: PropTypes.bool.isRequired,
};


export default FoodSelection;


