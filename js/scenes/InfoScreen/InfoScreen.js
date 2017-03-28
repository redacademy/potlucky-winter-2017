import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import PotluckConfirmationInfo from './../../components/PotluckConfirmationInfo';
import styles from './styles';

const InfoScreen = ({ currentPotluck }) => (
  <PotluckConfirmationInfo
    color={'red'}
    buttonNeeded={true}
    buttonType={'rsvp'}
    title={currentPotluck.title}
    image={require('../../../assets/images/southparklastsupper.jpg')}
    date={currentPotluck.eventDate}
    arrivingTime={currentPotluck.arriveTime}
    servingTime={currentPotluck.arriveTime}
    location={currentPotluck.location}
    mainButtonTitle={'Sounds good!'}
    secButtonTitle={'Maybe next time!'}
    description={currentPotluck.description}
  />
);

InfoScreen.propTypes = {
  currentPotluck: PropTypes.object.isRequired
};

export default InfoScreen;
