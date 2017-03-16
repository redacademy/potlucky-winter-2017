import React, { Component } from 'react';
import { Text } from 'react-native';

class FoodScreenContainer extends Component {
  static navigationOptions = {
    title: 'Food',
  };
  render() {
    return (
      <Text>Food Screen</Text>
    );
  }
}

export default FoodScreenContainer;