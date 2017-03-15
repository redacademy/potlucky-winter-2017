import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'
import SignUpForm from './../../components/SignupForm'



import styles from './styles'

const CreatePotluckScreen = ({ navigate, navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./../../../assets/images/wimpel.png')}
      />
      <Text style={styles.header}>Create a Potluck</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('NumberOfGuestScreen')}>
        <Text style={styles.buttonText}>Regular Potluck</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CreatePotluckScreen;