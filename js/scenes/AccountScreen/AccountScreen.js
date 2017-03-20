import React, { PropTypes } from 'react';
import {
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const AccountScreen = ({ firstName, lastName, email, password }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../../assets/images/account.png')} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formsBox}>
          <View style={styles.formElementContainer}>
            <TextInput placeholder={firstName} style={styles.formElement} />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.button}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formElementContainer}>
            <TextInput placeholder={lastName} style={styles.formElement} />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.button}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formElementContainer}>
            <TextInput placeholder={email} style={styles.formElement} />
          </View>
          <View style={styles.formElementContainer}>
            <TextInput placeholder={password} style={styles.formElement} />
          </View>
        </View>
      </View>
    </View>
  );
};

AccountScreen.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default AccountScreen;