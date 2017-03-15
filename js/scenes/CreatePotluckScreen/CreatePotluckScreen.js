import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import RoundedButton from '../../components/RoundedButton';

import styles from './styles';

const CreatePotluckScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('./../../../assets/images/wimpel.png')}
    />
    <Text style={styles.header}>Create a Potluck</Text>

    <RoundedButton style={{ marginTop: 100 }} text="Regular Potluck" onPress={() => navigation.navigate('CreatePotluckNavigator')} />
  </View>
);

export default CreatePotluckScreen;
