import React from 'react';
import { View } from 'react-native';

import InviteForm from './../../components/InviteForm';
import { styles } from './styles';

const InvitesScreen = ({ navigateTo }) => (
  <View style={styles.mainContainer}>
    <InviteForm navigateTo={navigateTo} />
  </View>
);

export default InvitesScreen;
