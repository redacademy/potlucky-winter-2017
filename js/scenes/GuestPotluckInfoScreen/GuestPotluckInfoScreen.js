import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import PotluckInfo from './../../components/PotluckInfo';
import styles from './styles';

import { colors } from '../../styles/baseStyles';
import SingleFlatButton from '../../components/SingleFlatButton';

const GuestPotluckInfoScreen = ({ currentPotluck, acceptInvite, declineInvite }) => (
  <View style={styles.container}>
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

    <View style={styles.buttonContainer}>
      <SingleFlatButton
        title={'Sorry, can\'t make it'}
        onPress={declineInvite}
        backgroundColor={colors.invitePrimaryBtn}
      />
      <SingleFlatButton
        title={'See you there!'}
        onPress={acceptInvite}
        backgroundColor={colors.inviteSecondaryBtn}
      />
    </View>

  </View >

);

GuestPotluckInfoScreen.propTypes = {
  currentPotluck: PropTypes.object.isRequired,
  acceptInvite: PropTypes.func.isRequired,
  declineInvite: PropTypes.func.isRequired,
};

export default GuestPotluckInfoScreen;
