import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const generateProgressBar = (progressNumber) => {
  switch (progressNumber) {
    case 1:
      return <Image style={styles.progressBarImage} source={require('./img/progress1.png')} />;
    case 2:
      return <Image style={styles.progressBarImage} source={require('./img/progress2.png')} />;
    case 3:
      return <Image style={styles.progressBarImage} source={require('./img/progress3.png')} />;
    case 4:
      return <Image style={styles.progressBarImage} source={require('./img/progress4.png')} />;
    default:
      return null;
  }
};

const CreatePotluckProgressBar = ({ title, progressNumber }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {generateProgressBar(progressNumber)}

  </View>
);

export default CreatePotluckProgressBar;
