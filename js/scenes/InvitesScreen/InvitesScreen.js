import React, { PropTypes } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

import InviteForm from './../../components/InviteForm';
import { styles } from './styles';

const InvitesScreen = ({ navigateTo, goTo }) => (
  <View style={styles.mainContainer}>
    <InviteForm navigateTo={navigateTo} />
    <TouchableHighlight style={styles.primaryBtn} onPress={() => goTo()}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableHighlight>
  </View>
);

InvitesScreen.propTypes = {
  navigateTo: PropTypes.func.isRequired
};

export default InvitesScreen;
