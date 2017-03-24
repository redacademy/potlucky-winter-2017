import React, { PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { styles } from './styles';
import { POTLUCK_FOOD } from '../../constants';

const PlanningScrollbar = ({ addPotluckItem, potluckFood }) => {
  return (
    <ScrollView
      horizontal
      style={styles.courseSelectionScrollBar}
      centerContent
    >
      <View style={styles.scrollBarCenter}>
        {
          Object.keys(POTLUCK_FOOD).map((foodItem) => (
            <View>
              <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem(foodItem)}}>
                <View style={styles.iconWrap} >
                  <Image source={POTLUCK_FOOD[foodItem].imageSource} style={styles.courseIcon}>
                    <View style={styles.plusIcon}>
                      <Text style={{ fontSize: 8 }}>+</Text>
                    </View>
                  </Image>
                </View>
                <Text style={styles.courseTitle}>{POTLUCK_FOOD[foodItem].name}</Text>
              </TouchableOpacity>
            </View>))
        }
      </View>
    </ScrollView>
  );
}

PlanningScrollbar.propTypes = {
  addPotluckItem: PropTypes.func.isRequired,
  potluckFood: PropTypes.objectOf(React.PropTypes.string).isRequired,
};

export default PlanningScrollbar;
