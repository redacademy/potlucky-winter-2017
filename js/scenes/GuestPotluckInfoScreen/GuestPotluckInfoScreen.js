import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PotluckInfo from './../../components/PotluckInfo';
import styles from './styles';
import SingleFlatButton from '../../components/SingleFlatButton';

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
    />

    <View style={styles.buttonContainer}>
      <SingleFlatButton title={'Sorry, can\'t make it'} />
      <SingleFlatButton title={'See you there!!!!'} />
    </View>

  </View>

);

export default GuestPotluckInfoScreen;
