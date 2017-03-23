import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PotluckConfirmationInfo from './../../components/PotluckConfirmationInfo';
import styles from './styles';

const InfoScreen = () => (
  <PotluckConfirmationInfo
    color={'red'}
    buttonNeeded={true}
    buttonType={'rsvp'}
    title={'The Greatest potluck Ever!!!!!!!!'}
    image={require('../../../assets/images/southparklastsupper.jpg')}
    date={'February 14, 2020'}
    arrivingTime={'12:30PM'}
    servingTime={'1:30PM'}
    location={'Belgrade, Serbia'}
    mainButtonTitle={'Sounds good!'}
    secButtonTitle={'Maybe next time!'}
    description={` Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}
  />
);

export default InfoScreen;
