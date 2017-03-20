import React, { PropTypes } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles';

const AccountScreen = ({ firstName, lastName, email }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../../assets/images/account.png')} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formsBox}>
          <View style={styles.formElementContainer}>
            <Text style={styles.formElement}>{firstName}</Text>
          </View>
          <View style={styles.formElementContainer}>
            <Text style={styles.formElement}>{lastName}</Text>
          </View>
          <View style={styles.formElementContainer}>
            <Text style={styles.formElement}>{email}</Text>
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
};

export default AccountScreen;
