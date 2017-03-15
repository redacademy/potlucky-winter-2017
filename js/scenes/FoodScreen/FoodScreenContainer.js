import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import FoodScreen from './FoodScreen'


class FoodScreenContainer extends Component {
  constructor() {
    super()
  }
  static navigationOptions = {
    title: 'Food Planning',
    header: ({ state, setParams, navigate }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <Button
          title={'Done'}
          onPress={() => navigate('InfoScreen')}
        />
      ),
      backTitle: null,
    }),
  };
  render() {
    return (
      <FoodScreen guests={this.props.guests} dispatch={this.props.dispatch} />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    guests: state.newPotluck.guestNumber,
    potLuckFood: state.newPotluck.potLuckFood
  }
}
export default connect(mapStateToProps)(FoodScreenContainer)
