import React, { PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import fontStyles from './../../styles/baseStyles';
import { POTLUCK_FOOD } from '../../constants';

const PlanningList = ({ potluckFood, removePotluckItem }) => (
  <View style={styles.planningListWrap}>
    {
      Object.keys(potluckFood).map(courseName => (
        <View key={courseName}>
          {potluckFood[courseName] > 0 ?
            <TouchableOpacity style={styles.courseButton} onPress={() => { removePotluckItem(courseName); }}>
              <View style={styles.iconWrap} >
                <Image source={POTLUCK_FOOD[courseName.toUpperCase()].imageSource} style={styles.courseIcon} />
                <View style={styles.courseQuantityBG}>
                  <Text style={fontStyles.foodIndicatorText}>{potluckFood[courseName]}</Text>
                </View>
              </View>
              <Text style={styles.appetizerCourseTitle}>{courseName}</Text>
            </TouchableOpacity>
            : null}
        </View>))
    }
  </View>
);

PlanningList.propTypes = {
  potluckFood: PropTypes.object.isRequired, //eslint-disable-line
  removePotluckItem: PropTypes.func.isRequired
};

PlanningList.propTypes = {
  potluckFood: PropTypes.object.isRequired
};

export default PlanningList;
