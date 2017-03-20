import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const AppOnboarding = ({ image, text }) => {
  return (
    <View
      style={styles.mainContainer}
    >
      <Image
        source={image}
        style={styles.background}
      />
      <View
        style={styles.yellowseperator}
      >
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default AppOnboarding;