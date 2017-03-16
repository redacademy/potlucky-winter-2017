import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { styles } from './styles';


const path = {
  appetite: require('./../../../assets/images/app.png'),
  mainCourse: require('./../../../assets/images/Group 4.png'),
  salad: require('./../../../assets/images/salad.png'),
  desserts: require('./../../../assets/images/dess.png'),
  drinks: require('./../../../assets/images/dr.png'),
  chipIn: require('./../../../assets/images/chip-in.png'),
  talent: require('./../../../assets/images/talent.png'),
  custom: require('./../../../assets/images/custom.png')
}

const PlanningScrollbar = ({ addPotluckItem }) => (

    <ScrollView
      horizontal={true}
      style={styles.courseSelectionScrollBar}
      centerContent={true}
      >
      <View style={styles.scrollBarCenter}>
       <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('Appetizers')}}>
        <View style={styles.iconWrap} >
          <Image source={path.appetite} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Appetizers</Text>
       </TouchableOpacity>
        <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('Mains')}}>
        <View style={styles.iconWrap} >
          <Image source={path.mainCourse} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Mains</Text>
       </TouchableOpacity>
        <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('Salads')}}>
        <View style={styles.iconWrap} >
          <Image source={path.salad} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Salads</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('Desserts')}}>
        <View style={styles.iconWrap} >
          <Image source={path.desserts} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Desserts</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('Drinks')}}>
        <View style={styles.iconWrap} >
          <Image source={path.drinks} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Drinks</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('ChipIn')}}>
        <View style={styles.iconWrap} >
          <Image source={path.chipIn} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Chip in</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('Talent')}}>
        <View style={styles.iconWrap} >
          <Image source={path.talent} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Talent</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.courseButton} onPress={() => {addPotluckItem('Custom')}}>
        <View style={styles.iconWrap} >
          <Image source={path.custom} style={styles.courseIcon}>
           <View style={styles.plusIcon}>
            <Text style={{fontSize: 8}}>+</Text>
           </View>
          </Image>
        </View>
        <Text style={styles.courseTitle}>Custom</Text>
       </TouchableOpacity>
       </View>
      </ScrollView>
  );

export default PlanningScrollbar;