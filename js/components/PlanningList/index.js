import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import fontStyles from './../../styles/baseStyles';

const path = {
  appetite: require('./../../../assets/images/app.png'),
  mains: require('./../../../assets/images/Group 4.png'),
  salads: require('./../../../assets/images/salad.png'),
  desserts: require('./../../../assets/images/dess.png'),
  drinks: require('./../../../assets/images/dr.png'),
  chipIn: require('./../../../assets/images/chip-in.png'),
  talent: require('./../../../assets/images/talent.png'),
  custom: require('./../../../assets/images/custom.png')
};

const PlanningList = ({courses}) => {
  console.log(courses);
  return (
    <View style={styles.planningListWrap}>
      {
        Object.keys(courses).map((courseName) => {
          return (<View>
            <TouchableOpacity style={styles.courseButton}>
              <View style={styles.iconWrap} >
                <Image source={path.appetite} style={styles.courseIcon} />
                <View style={styles.courseQuantityBG}>
                  <Text style={fontStyles.foodIndicatorText}>{courses[courseName]}</Text>
                </View>
              </View>
              <Text style={styles.appetizerCourseTitle}>{ courseName }</Text>
            </TouchableOpacity>
          </View>);
        })
      }
    </View>
  );
};

export default PlanningList;
