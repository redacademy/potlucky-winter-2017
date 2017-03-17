import React, { Component } from 'react';
import { Button } from 'react-native';
import PotluckInfoScreen from './PotluckInfoScreen';

import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';

import NavigationArrow from '../../components/NavigationArrow';

import { progressBar } from '../../constants'

class PotluckInfoScreenContainer extends Component {
  static navigationOptions = {
    title: 'Info',
    header: ({ navigate, goBack }) => ({
      style: { height: 0, margin: 0, padding: 0, },
      title: <CreatePotluckProgressBar title='Info' progressNumber={progressBar.THIRD_SCREEN} />,
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <NavigationArrow
          onPress={() => navigate('InvitesScreen')}
        />
      ),
      left: (
        <NavigationArrow
          backArrow
          onPress={() => navigate('FoodPlanningScreen')}
        />
      ),
    })
  }
  render() {
    return (
      <PotluckInfoScreen />
    );
  }
}

export default PotluckInfoScreenContainer;
