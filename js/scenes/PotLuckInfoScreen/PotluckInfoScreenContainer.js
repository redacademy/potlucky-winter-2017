import React, { Component } from 'react';
import { Button } from 'react-native';
import PotluckInfoScreen from './PotluckInfoScreen';

class PotluckInfoScreenContainer extends Component {
  static navigationOptions = {
    title: 'Info',
    header: ({ navigate }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <Button
          title={'Done'}
          onPress={() => navigate('InvitesScreen')}
        />
      ),
      backTitle: null,
    })
  }
  render() {
    return (
      <PotluckInfoScreen />
    );
  }
}

export default PotluckInfoScreenContainer;
