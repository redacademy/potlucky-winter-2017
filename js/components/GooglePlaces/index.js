import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Main, {
  colors,
  typography,
  windowWidth as width
} from '../../styles/baseStyles';
import styles from './styles';
import { API_KEY } from './../../../config/googlePlaces';

const GooglePlaces = ({ onLocationChange }) => (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <GooglePlacesAutocomplete
        placeholder=""
        minLength={2}
        autoFocus={false}
        fetchDetails={true}
        query={{
          key: API_KEY,
        }}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          onLocationChange(details);
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            height: 24,
            marginTop: 13,
            width: '100%'
          },
          textInput: {
            width: '75%',
            paddingLeft: 5,
            fontFamily: typography.fontMain,
            borderColor: colors.mainBrandColor,
            fontSize: typography.baseFontSize,
            borderRadius: 3,
            borderWidth: 1,
            height: '100%',
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
            fontSize: typography.smallestFontSize
          },
        }}
        currentLocation={false}
      />
    </View>
);

export default GooglePlaces;
