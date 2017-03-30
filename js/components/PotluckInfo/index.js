import React, { PropTypes } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import SingleFlatButton from '../SingleFlatButton';
import styles from './styles';
import Map from './../../components/Map';

const PotluckInfo = ({ location, date, servingTime, arrivingTime, title, image, description, coordinates }) => {

  return (
    <View style={styles.container}>
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
        {coordinates &&
          <Map lat={coordinates.lat} lng={coordinates.lng} />
        }
        <View />
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.descriptionText}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

PotluckInfo.propTypes = {
  image: PropTypes.object.isRequired,
};

export default PotluckInfo;
