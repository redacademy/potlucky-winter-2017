import React, { Component } from 'react';
import { colors, typography, windowHeight as height } from '../../styles/baseStyles';
import PotluckConfirmation from '../../components/PotluckConfirmationInfo';

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
      <PotluckConfirmation />
    );
  }
}

export default PotluckConfirmationScreenContainer;