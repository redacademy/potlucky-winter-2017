import React, { PropTypes } from 'react';
import { View } from 'react-native';

import InviteForm from './../../components/InviteForm';
import { styles } from './styles';

const InvitesScreen = ({ navigateTo }) => (
  <View style={styles.mainContainer}>
    <InviteForm navigateTo={navigateTo} />
  </View>
);

InvitesScreen.propTypes = {
  navigateTo: PropTypes.func.isRequired
};

export default InvitesScreen;
