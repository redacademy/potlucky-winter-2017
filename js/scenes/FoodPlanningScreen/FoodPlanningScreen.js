import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './styles';
import fontStyles from './../../styles/baseStyles';
import PlanningScrollbar from './../../components/planningScrollbar';
import PlanningList from './../../components/PlanningList';

const FoodPlanningScreen = ({ potluckFood, guests, addPotluckItem }) => (

  <View style={styles.container}>
    <View style={styles.foodPlanningWrap}>
      <PlanningList potluckFood={potluckFood} />
      <Text style={fontStyles.guestNumber}>{guests}</Text>
    </View>
    <PlanningScrollbar potluckFood={potluckFood} addPotluckItem={addPotluckItem} />
  </View>
);

FoodPlanningScreen.propTypes = {
  guests: PropTypes.number.isRequired,
  potluckFood: PropTypes.objectOf(React.PropTypes.string).isRequired,
  addPotluckItem: PropTypes.func.isRequired
};

export default FoodPlanningScreen;
