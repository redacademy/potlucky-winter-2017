import React, { PropTypes } from 'react';
import { View } from 'react-native';
import PotluckInfo from './../../components/PotluckInfo';
import styles from './styles';

import { colors } from '../../styles/baseStyles';
import SingleFlatButton from '../../components/SingleFlatButton';

const GuestPotluckInfoScreen = ({ currentPotluck, actionInvite }) => (
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

    {
      !currentPotluck.isNew &&
      <View style={styles.buttonContainer}>
        <SingleFlatButton
          title={'Sorry, can\'t make it'}
          onPress={() => actionInvite({ inviteSelection: 'inviteDeclined' })}
          backgroundColor={colors.invitePrimaryBtn}
        />
        <SingleFlatButton
          title={'See you there!'}
          onPress={() => actionInvite({ inviteSelection: 'inviteAccepted' })}
          backgroundColor={colors.inviteSecondaryBtn}
        />
      </View>
    }

  </View >

);

GuestPotluckInfoScreen.propTypes = {
  currentPotluck: PropTypes.object.isRequired,
  actionInvite: PropTypes.func.isRequired,
};

export default GuestPotluckInfoScreen;
