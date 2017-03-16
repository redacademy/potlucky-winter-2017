import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Banner = () => {

  const bgPath = require('./../../../assets/images/bg.jpg');
  const logoPath = require('./../../../assets/images/logo_shadow.png');

  return (
    <Image source={bgPath} style={styles.background}>
      <Image source={logoPath} style={styles.logo} />
    </Image>
  )
}

export default Banner;
