import React, { PropTypes } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { inviteConfirmationStatus } from '../../constants';
import styles from './styles';

const HostPotluckGuestInvitesScreen = ({ guestList }) => (
  <ScrollView style={styles.container}>
    <View style={styles.rowContainer}>
      {
        Object.values(guestList).map((guest) => {
          return (
            <View style={styles.guestNameContainer} key={Math.random() * Date.now()}>
              <Text style={styles.nameText}>{guest[0]}</Text>
              <View style={styles.imageView}>
                {(guest[1] === '+' && <Image source={inviteConfirmationStatus.YES.imageSource} />)
                || (guest[1] === '-' && <Image source={inviteConfirmationStatus.NO.imageSource} />)
                || <Image source={inviteConfirmationStatus.UNKNOWN.imageSource} />}
              </View>
            </View>
          );
        })
      }
    </View>
  </ScrollView>
);

HostPotluckGuestInvitesScreen.defaultProps = {
  guestList: PropTypes.arrayOf(PropTypes.array),
};

HostPotluckGuestInvitesScreen.propTypes = {
  guestList: PropTypes.arrayOf(PropTypes.array),
};

export default HostPotluckGuestInvitesScreen;
