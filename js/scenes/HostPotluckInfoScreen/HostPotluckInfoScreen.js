import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import PotluckInfo from './../../components/PotluckInfo';
import styles from './styles';

const HostPotluckInfoScreen = ({ currentPotluck }) => (
  <PotluckInfo
    title={currentPotluck.title}
    image={{ uri: currentPotluck.link }}
    date={currentPotluck.eventDate}
    arrivingTime={currentPotluck.arriveTime}
    servingTime={currentPotluck.arriveTime}
    location={currentPotluck.location}
    description={currentPotluck.description}
    coordinates={currentPotluck.coordinates}
  />
);

HostPotluckInfoScreen.propTypes = {
  currentPotluck: PropTypes.object.isRequired
};

export default HostPotluckInfoScreen;
