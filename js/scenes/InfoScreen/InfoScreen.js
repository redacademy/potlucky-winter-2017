import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PotluckConfirmationInfo from './../../components/PotluckConfirmationInfo';
import styles from './styles';

const InfoScreen = () => (
  <PotluckConfirmationInfo title={'Submit'} color={'red'} buttonNeeded={false} />
);

export default InfoScreen;
