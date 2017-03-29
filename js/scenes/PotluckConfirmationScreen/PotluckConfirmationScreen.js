import React, { PropTypes } from 'react';
import PotluckInfo from './../../components/PotluckInfo';

const PotluckConfirmationScreen = ({ currentPotluck }) => (
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
);

PotluckConfirmationScreen.propTypes = {
  currentPotluck: PropTypes.object.isRequired
};

export default PotluckConfirmationScreen;
