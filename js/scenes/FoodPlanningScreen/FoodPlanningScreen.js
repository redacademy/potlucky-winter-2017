import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './styles';
import fontStyles from './../../styles/baseStyles';
import PlanningScrollbar from './../../components/planningScrollbar';
import PlanningList from './../../components/PlanningList';

const FoodPlanningScreen = ({ potluckFood, guests, addPotluckItem, dishesUsed, removePotluckItem }) => (

  <View style={styles.container}>
    <View style={styles.foodPlanningWrap}>
      <PlanningList potluckFood={potluckFood} removePotluckItem={removePotluckItem} />
      <Text style={fontStyles.guestNumber}>{(guests - dishesUsed)}</Text>
    </View>
    <PlanningScrollbar potluckFood={potluckFood} addPotluckItem={addPotluckItem} />
  </View>
);

FoodPlanningScreen.propTypes = {
  potluckFood: PropTypes.object.isRequired,
  guests: PropTypes.number.isRequired,
  addPotluckItem: PropTypes.func.isRequired,
  removePotluckItem: PropTypes.func.isRequired,
  dishesUsed: PropTypes.number.isRequired,
};


export default FoodPlanningScreen;
