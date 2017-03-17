import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import FoodPlanningScreen from './FoodPlanningScreen';

import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';

import { NavigationActions } from 'react-navigation'
import NavigationArrow from '../../components/NavigationArrow'

const navigationAction = NavigationActions.navigate({
  routeName: 'CreatePotluckNavigator',
  params: {},

  // navigate can have a nested navigate action that will be run inside the child router
  action: NavigationActions.navigate({ routeName: 'PotLuckInfoScreen' })
});

class FoodPlanningScreenContainer extends Component {
  static navigationOptions = {
    header: ({ navigate, dispatch, goBack }) => ({
      style: { height: 0, margin: 0, padding: 0, },
      title: <CreatePotluckProgressBar title='Food Planning' progressNumber={2} />,
      right: (
        <NavigationArrow
          onPress={() => navigate('PotLuckInfoScreen')}
        />
      ),
      left: (
        <NavigationArrow
          backArrow
          onPress={() => navigate('NumberOfGuestScreen')}
        />
      ),
    }),
  };

  render() {
    return (
      <FoodPlanningScreen guests={this.props.guests} dispatch={this.props.dispatch} />
    );
  }
}
const mapStateToProps = (state) => ({
  guests: state.newPotluck.guestNumber,
  potLuckFood: state.newPotluck.potLuckFood
});
export default connect(mapStateToProps)(FoodPlanningScreenContainer);
