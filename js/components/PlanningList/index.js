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

const PlanningList = ({ potluckFood }) => {
  return (
    <View style={styles.planningListWrap}>
      {
        Object.keys(potluckFood).map(courseName => (
          <View key={courseName}>
            <TouchableOpacity style={styles.courseButton}>
              <View style={styles.iconWrap} >
                <Image source={POTLUCK_FOOD[courseName.toUpperCase()].imageSource} style={styles.courseIcon} />
                <View style={styles.courseQuantityBG}>
                  <Text style={fontStyles.foodIndicatorText}>{potluckFood[courseName]}</Text>
                </View>
              </View>
              <Text style={styles.appetizerCourseTitle}>{courseName}</Text>
            </TouchableOpacity>
          </View>))
      }
    </View>
  );
};

export default PlanningList;
