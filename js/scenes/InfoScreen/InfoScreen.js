import React from 'react';
import InfoScreenContainer from './InfoScreenContainer';
import { Text,ScrollView } from 'react-native'
import InfoForm from './../../components/InfoForm'


const InfoScreen = () => {
  return (
    <ScrollView>
    <InfoForm/> 
    </ScrollView>
  );
};

export default InfoScreen;