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
      <PotluckConfirmation
        buttonType={'confirmation'}
        mainButtonTitle={'Looks good to me!'}
        title={'The Greatest potluck Ever!!!!!!!!'}
        image={require('../../../assets/images/southparklastsupper.jpg')}
        date={'February 14, 2020'}
        arrivingTime={'12:30PM'}
        servingTime={'1:30PM'}
        location={'Belgrade, Serbia'}
        description={` Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}
      />
    );
  }
}

export default PotluckConfirmationScreenContainer;