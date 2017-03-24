import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FoodPlanningScreen from './FoodPlanningScreen';
import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';
import NavigationArrow from '../../components/NavigationArrow';
import { addPotluckItem } from '../../redux/modules/newPotluckActions';
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
  constructor(props) {
    super(props);
    this.state = {
      potluckFood: {},
      dishesUsed: 0,
    };
  }
  componentDidUpdate() {
    const { potluckFood } = this.state;
    this.props.dispatch(addPotluckItem(potluckFood));
  }

  addPotluckItem = (potluckItem) => {
    const { potluckFood } = this.state;
    const exists = Object.prototype.hasOwnProperty.call(potluckFood, potluckItem);
    if (this.props.guests > 0) {
      this.changePotluckState(potluckItem, potluckFood, exists);
    }
  }
  changePotluckState = (potluckItem, potluckFood, exists) => {
    this.setState({ potluckFood: { ...potluckFood, [potluckItem]: exists ? potluckFood[potluckItem] + 1 : 1 } });
    if (this.props.guests >= 0) {
      this.setState({ dishesUsed: (this.state.dishesUsed + 1) });
    }
  }
  render() {
    return (
      <FoodPlanningScreen
        potluckFood={this.state.potluckFood}
        guests={this.props.guests}
        addPotluckItem={this.addPotluckItem}
        dishesUsed={this.state.dishesUsed}
      />
    );
  }
}

FoodPlanningScreenContainer.propTypes = {
  guests: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    guests: state.newPotluck.guestCount,
  };
};


export default connect(mapStateToProps)(FoodPlanningScreenContainer);
