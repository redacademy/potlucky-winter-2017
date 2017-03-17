import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import FoodPlanningScreen from './FoodPlanningScreen';


class FoodPlanningScreenContainer extends Component {
  static navigationOptions = {
    title: 'Food Planning',
    header: ({ navigate }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <Button
          title={'Done'}
          onPress={() => navigate('PotLuckInfoScreen')}
        />
      ),
      backTitle: null,
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
