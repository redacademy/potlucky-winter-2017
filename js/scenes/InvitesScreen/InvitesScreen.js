import React from 'react';
import { View } from 'react-native';

import InviteForm from './../../components/InviteForm';
import { styles } from './styles';

const InvitesScreen = () => (
  <View style={styles.mainContainer}>
    <InviteForm />
  </View>
);

export default InvitesScreen;
