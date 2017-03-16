import React, { Component } from 'react';
import { Button } from 'react-native';
import InfoScreen from './InfoScreen';

class InfoScreenContainer extends Component {
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
      <InfoScreen />
    );
  }
}

export default InfoScreenContainer;
