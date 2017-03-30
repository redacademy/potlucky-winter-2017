import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { styles } from './styles';
import fontStyles from './../../styles/baseStyles';
import PlanningScrollbar from './../../components/planningScrollbar';
import PlanningList from './../../components/PlanningList';

const FoodPlanningScreen = ({ potluckFood, guests, addPotluckItem, dishesUsed, removePotluckItem, goTo }) => (

  <View style={styles.container}>
    <View style={styles.foodPlanningWrap}>
      <PlanningList potluckFood={potluckFood} removePotluckItem={removePotluckItem} />
      <Text style={fontStyles.guestNumber}>{(guests - dishesUsed)}</Text>
    </View>
    <PlanningScrollbar potluckFood={potluckFood} addPotluckItem={addPotluckItem} />
    <TouchableHighlight style={styles.primaryBtn} onPress={() => goTo()}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableHighlight>
  </View>
);

FoodPlanningScreen.propTypes = {
  potluckFood: PropTypes.object.isRequired,
  guests: PropTypes.number.isRequired,
  addPotluckItem: PropTypes.func.isRequired,
  removePotluckItem: PropTypes.func.isRequired,
  dishesUsed: PropTypes.number.isRequired,
  goTo: PropTypes.func.isRequired,
};


export default FoodPlanningScreen;
