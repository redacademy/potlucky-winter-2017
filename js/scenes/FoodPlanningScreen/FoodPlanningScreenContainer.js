import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodPlanningScreen from './FoodPlanningScreen';
import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';
import NavigationArrow from '../../components/NavigationArrow';
import { progressBar } from '../../constants';

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

    this.setState({ potluckFood: { ...potluckFood, [potluckItem]: exists ? potluckFood[potluckItem] + 1 : 1 } });
  }

  render() {
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


export default connect(mapStateToProps)(FoodPlanningScreenContainer);
