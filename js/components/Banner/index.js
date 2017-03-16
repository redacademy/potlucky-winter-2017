import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Banner = () => {
  return (
    <Image source={require('./../../../assets/images/bg.jpg')} style={styles.background}>
      <Image source={require('./../../../assets/images/logo_shadow.png')} style={styles.logo} />
    </Image>
  )
}

export default Banner;
