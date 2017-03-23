import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import SingleFlatButton from '../SingleFlatButton';
import styles from './styles';

const buttonRendering = (buttonType, mainButtonTitle, secButtonTitle) => {
  if (buttonType === 'rsvp') {
    return (
      <View style={styles.buttonContainer}>
        <SingleFlatButton width={'half'} style={styles.rsvpButton} title={mainButtonTitle} />
        <SingleFlatButton width={'half'} style={styles.rsvpButton} title={secButtonTitle} />
      </View>
    );
  }
  if (buttonType === 'confirmation') {
    return <SingleFlatButton title={mainButtonTitle} color="green" />;
  }
  return null;
};

const PotluckConfirmationInfo = ({ location, date, servingTime, arrivingTime, title, image, color, buttonNeeded = true, buttonType, mainButtonTitle, secButtonTitle, description }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.textBanner}>
            <Text style={styles.bannerText}> {title}</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.textContainer}>
            <Text style={styles.colorText}>Date: </Text>
            <Text>{date}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.colorText}>Arriving Time: </Text>
            <Text> {arrivingTime}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.colorText}>Serving Time: </Text>
            <Text>{servingTime}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.colorText}>Location: </Text>
            <Text> {location}</Text>
          </View>
        </View>
        <View>
          <Image style={styles.mapImage} source={require('../../../assets/images/mockMap.png')} />
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.descriptionText}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </View>
    {
      buttonNeeded &&
      buttonRendering(buttonType, mainButtonTitle, secButtonTitle)
    }
  </View>

);

export default PotluckConfirmationInfo;
