import React from 'react';
import { ScrollView, View, } from 'react-native';
import InfoForm from './../../components/InfoForm';

import styles from './styles'

const InfoScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <InfoForm />
    </ScrollView>
  </View>
);

export default InfoScreen;
