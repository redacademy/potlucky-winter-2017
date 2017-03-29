import React from 'react';
import { ScrollView, View, } from 'react-native';
import InfoForm from './../../components/InfoForm';

import styles from './styles'

const InfoScreen = ({ goToImage, navigation }) => (
  <View style={styles.container}>
    <ScrollView>
      <InfoForm goToImage={goToImage} navigation={navigation} />
    </ScrollView>
  </View>
);

export default InfoScreen;
