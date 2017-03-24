import React, { Component } from 'react';
import { View } from 'react-native';
import { colors, typography, windowHeight as height } from '../../styles/baseStyles';
import PotluckInfo from '../../components/PotluckInfo';

import SingleFlatButton from '../../components/SingleFlatButton';

import styles from './styles';

class PotluckConfirmationScreenContainer extends Component {
  static navigationOptions = {
    header: {
      title: 'Confirmation',
      titleStyle: {
        fontSize: typography.headerFontSize
      },
      tintColor: 'white',
      style: {
        backgroundColor: colors.mainBrandColor,
        height: height * 0.13
      }
    },
    tabBar: () => ({
      visible: false
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <PotluckInfo
          title={'TEST'}
          image={require('../../../assets/images/southparklastsupper.jpg')}
          date={'12-12-12'}
          arrivingTime={'12:00am'}
          servingTime={'12:01am'}
          location={'canda'}
          description={'yum fod for every1,'}
        />

        <View style={styles.buttonContainer}>
          <SingleFlatButton title={'Confirm'} />
        </View>
      </View>
    );
  }
}

export default PotluckConfirmationScreenContainer;
