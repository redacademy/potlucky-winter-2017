import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { styles } from './styles';
import fontStyles from './../../styles/baseStyles';
import PlanningScrollbar from './../../components/planningScrollbar';
import PlanningList from './../../components/PlanningList';

const FoodPlanningScreen = ({ guests, courses, addPotluckItem }) => (

  <View style={styles.container}>
    <View style={styles.foodPlanningWrap}>
      <PlanningList courses={courses} />
      <Text style={fontStyles.guestNumber}>{guests}</Text>
    </View>
    <PlanningScrollbar addPotluckItem={addPotluckItem} />
  </View>
  );

export default FoodPlanningScreen;
