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
        Object.keys(potluckFood).map((foodItem) => (
        <View>
          <TouchableOpacity style={styles.courseButton}>
            <View style={styles.iconWrap} >
              <Image source={POTLUCK_FOOD[foodItem].imageSource} style={styles.courseIcon} />
              <View style={styles.courseQuantityBG}>
                <Text style={fontStyles.foodIndicatorText}>{potluckFood[foodItem]}</Text>
              </View>
            </View>
            <Text style={[styles.courseTitle, { color: POTLUCK_FOOD[foodItem].color }]}>{POTLUCK_FOOD[foodItem].name}</Text>
          </TouchableOpacity>
        </View>))
      }
    </View>
  );
};

PlanningList.propTypes = {
  potluckFood: PropTypes.objectOf(React.PropTypes.string).isRequired,
};

export default PlanningList;
