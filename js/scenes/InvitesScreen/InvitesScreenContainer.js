import React, { Component } from 'react';

import { Button } from 'react-native';
import InvitesScreen from './InvitesScreen';

import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';

import NavigationArrow from '../../components/NavigationArrow'

class InvitesScreenContainer extends Component {
  static navigationOptions = {
    title: 'Invites',
    header: ({ navigate }) => ({
      style: { height: 0, margin: 0, padding: 0, },
      title: <CreatePotluckProgressBar title='Invites' progressNumber={4} />,
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      left: (
        <NavigationArrow
          backArrow
          onPress={() => navigate('PotLuckInfoScreen')}
        />
      ),
    })
  }
  render() {
    return (
      <InvitesScreen />
    );
  }
}

export default InvitesScreenContainer;
