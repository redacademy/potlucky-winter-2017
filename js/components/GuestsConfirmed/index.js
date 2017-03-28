import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const GuestsConfirmed = ({ confirmedGuests, expectedGuests }) => (
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

GuestsConfirmed.propTypes = {
  confirmedGuests: PropTypes.number.isRequired,
  expectedGuests: PropTypes.number.isRequired,
};

export default GuestsConfirmed;