import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import SingleFlatButton from '../SingleFlatButton';
import styles from './styles';


const PotluckConfirmationInfo = ({ title, color, buttonNeeded = true }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../../assets/images/southparklastsupper.jpg')} />
            <View style={styles.textBanner}>
              <Text style={styles.bannerText}> South Park: The Last Supper</Text>
            </View>
          </View>
          <View style={styles.infoBox}>
            <View style={styles.textContainer}>
              <Text style={styles.colorText}>Date: </Text>
              <Text>February 14, 2020</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.colorText}>Arriving Time: </Text>
              <Text> 12:30PM</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.colorText}>Serving Time: </Text>
              <Text>1:30PM</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.colorText}>Location: </Text>
              <Text>Belgrade, Serbia</Text>
            </View>
          </View>
          <View>
            <Image style={styles.mapImage} source={require('../../../assets/images/mockMap.png')} />
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionHeader}>Description</Text>
            <Text style={styles.descriptionText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Text>
          </View>
        </ScrollView>
      </View>
      {
        buttonNeeded &&
        <SingleFlatButton title={title} color={color} />
      }
    </View>

  );
};

export default PotluckConfirmationInfo;