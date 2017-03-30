import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import MyPotluckInvitesScreen from './MyPotluckInvitesScreen';
import { colors } from '../../styles/baseStyles';
import NavigationArrow from './../../components/NavigationArrow';

class MyPotluckInvitesScreenContainer extends Component {
  static navigationOptions = {
    header: ({ dispatch }) => ({
      left: <NavigationArrow
        onPress={() => (
          dispatch(NavigationActions.back())
        )}
        backArrow
      />,
      style: { backgroundColor: colors.mainBrandColor, paddingLeft: 20, paddingRight: 20 }
    }),
  }
  render() {
    return (
      <MyPotluckInvitesScreen />
    );
  }
}

export default MyPotluckInvitesScreenContainer;
