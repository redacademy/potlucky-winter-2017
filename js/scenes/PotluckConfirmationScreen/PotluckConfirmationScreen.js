import React, { PropTypes } from 'react';
import PotluckInfo from './../../components/PotluckInfo';

const PotluckConfirmationScreen = ({ currentPotluck }) => (
  <PotluckInfo
    title={currentPotluck.title}
    image={{ uri: currentPotluck.link }}
    date={currentPotluck.eventDate}
    arrivingTime={currentPotluck.arriveTime}
    servingTime={currentPotluck.servingTime}
    location={currentPotluck.location}
    description={currentPotluck.description}
    coordinates={currentPotluck.coordinates}
  />
);

PotluckConfirmationScreen.propTypes = {
  currentPotluck: PropTypes.object.isRequired
};

export default PotluckConfirmationScreen;
