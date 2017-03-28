import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import PotluckInfo from './../../components/PotluckInfo';
import styles from './styles';

const GuestPotluckInfoScreen = ({ currentPotluck }) => (
  <View style={styles.container}>
    <PotluckInfo
      title={currentPotluck.title}
      image={require('../../../assets/images/southparklastsupper.jpg')}
      date={currentPotluck.eventDate}
      arrivingTime={currentPotluck.arriveTime}
      servingTime={currentPotluck.arriveTime}
      location={currentPotluck.location}
      description={currentPotluck.description}
      coordinates={currentPotluck.coordinates}
    />
    <View style={styles.buttonContainer}>
      <TouchableHighlight style={styles.primaryBtn}>
        <Text style={styles.buttonText}>Sorry, can't make it</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.secondaryBtn}>
        <Text style={styles.buttonText}>See you there!</Text>
      </TouchableHighlight>
    </View>

  </View>

);

GuestPotluckInfoScreen.propTypes = {
  currentPotluck: PropTypes.object.isRequired,
};

export default GuestPotluckInfoScreen;
