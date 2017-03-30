import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const GuestsConfirmed = ({ confirmedGuests, expectedGuests }) => ( // eslint-disable-line
  <View style={styles.container}>
    <Text style={styles.confirmedGuestsText}>
      {confirmedGuests}
    </Text>
    <View style={styles.expectedGuestsContainer}>
      <Text style={styles.expectedGuestsText}>
        /{expectedGuests}
      </Text>
      <Text style={[styles.expectedGuestsText, styles.endText]}>
        Confirmed{'\n'}Guests
      </Text>
    </View>
  </View>
);

export default GuestsConfirmed;
