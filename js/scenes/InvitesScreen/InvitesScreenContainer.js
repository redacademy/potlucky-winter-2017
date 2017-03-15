import React, {Component} from 'react';
import { Text } from 'react-native'
import InvitesScreen from './InvitesScreen'

class InvitesScreenContainer extends Component {
  static navigationOptions = {
    title: 'Invites',
  };
  render() {
    return (
      <InvitesScreen/>
    );
  }
}

export default InvitesScreenContainer;
