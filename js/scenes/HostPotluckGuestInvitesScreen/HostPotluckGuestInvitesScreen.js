import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

const GuestPotluckInfoScreen = () => ( // { guestList }
  <ScrollView style={styles.container}>
    <View>
      <Text>HostPotluckGuestInvites</Text>
    </View>
  </ScrollView>
);

export default GuestPotluckInfoScreen;
