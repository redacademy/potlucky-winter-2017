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

const PlanningScrollbar = ({ addPotluckItem }) => (

  <ScrollView
    horizontal
    style={styles.courseSelectionScrollBar}
    centerContent
  >
    <View style={styles.scrollBarCenter}>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('Appetizers'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.APPETIZERS.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Appetizers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('Mains'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.MAINS.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Mains</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('Salads'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.SALADS.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Salads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('Desserts'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.DESSERTS.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Desserts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('Drinks'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.DRINKS.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('ChipIn'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.CHIPIN.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Chip in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('Talent'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.TALENT.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Talent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseButton} onPress={() => { addPotluckItem('Custom'); }}>
        <View style={styles.iconWrap} >
          <Image source={POTLUCK_FOOD.CUSTOM.imageSource} style={styles.courseIcon}>
            <View style={styles.plusIcon}>
              <Text style={{ fontSize: 8 }}>+</Text>
            </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Custom</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

PlanningScrollbar.propTypes = {
  addPotluckItem: PropTypes.func.isRequired
};

export default PlanningScrollbar;
