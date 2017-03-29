import React, { PropTypes } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { inviteConfirmationStatus } from '../../constants';
import styles from './styles';

const getStatusImage = (inviteIndicator) => {
  switch (inviteIndicator) {
    case '+':
      return <Image style={styles.statusImage} source={inviteConfirmationStatus.YES.imageSource} />;
    case '-':
      return <Image style={styles.statusImage} source={inviteConfirmationStatus.NO.imageSource} />;
    case '?':
      return <Image style={styles.statusImage} source={inviteConfirmationStatus.UNKNOWN.imageSource} />;
    default:
      return null;
  }
};

const HostPotluckGuestInvitesScreen = ({ guestList }) => (
  <ScrollView style={styles.container}>
    <View style={styles.rowContainer}>
      {
        Object.values(guestList).map((guest) => {
          return (
            <View style={styles.guestNameContainer} key={Math.random() * Date.now()}>
              <Text style={styles.nameText}>{guest[0]}</Text>
              <View style={styles.imageView}>
                {
                  getStatusImage(guest[1])
                }
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
