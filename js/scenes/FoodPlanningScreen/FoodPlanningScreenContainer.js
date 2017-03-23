import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import FoodPlanningScreen from './FoodPlanningScreen';


import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';

import { NavigationActions } from 'react-navigation';
import NavigationArrow from '../../components/NavigationArrow';

import { progressBar, POTLUCK_FOOD } from '../../constants';


class FoodPlanningScreenContainer extends Component {
  static navigationOptions = {
    header: ({ navigate, dispatch, goBack }) => ({
      style: { height: 0, margin: 0, padding: 0, },
      title: <CreatePotluckProgressBar title="Food Planning" progressNumber={progressBar.SECOND_SCREEN} />,
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
  constructor() {
    super();
    this.state = {
      potluckFood: {}
    };
  }

  addPotluckItem = (potluckItem) => {
    const { potluckFood } = this.state;

    const exists = Object.prototype.hasOwnProperty.call(potluckFood, potluckItem);
    this.setState({ potluckFood: { ...potluckFood, [potluckItem]: exists ? potluckFood[potluckItem] + 1 : 0 } });
    console.log(potluckFood);
  }

  render() {
    console.log('courses is...', this.props.courses);

    return (
      <FoodPlanningScreen
        potluckFood={this.state.potluckFood}
        guests={this.props.guests}
        courses={this.props.courses}
        addPotluckItem={this.addPotluckItem}
      />
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    guests: state.newPotluck.guestCount,
    courses: state.newPotluck.potluckFood.courses,
  };
};

const mapDispatchToProps = dispatch => ({
  addPotluckItem: (name) => {
    dispatch(addPotluckItem(name));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FoodPlanningScreenContainer);
