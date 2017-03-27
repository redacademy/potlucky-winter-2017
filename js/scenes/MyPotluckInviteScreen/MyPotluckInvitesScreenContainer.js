import React, { Component } from 'react';
import MyPotluckInvitesScreen from './MyPotluckInvitesScreen';
import { colors } from '../../styles/baseStyles';

class MyPotluckInvitesScreenContainer extends Component {
  static navigationOptions = {
    header: () => ({
      style: { backgroundColor: colors.mainBrandColor }
    })
  };
  render() {
    return (
      <MyPotluckInvitesScreen />
    );
  }
}

export default MyPotluckInvitesScreenContainer;