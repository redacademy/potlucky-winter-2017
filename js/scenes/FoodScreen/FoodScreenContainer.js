import React, { Component } from 'react';
import FoodScreen from './FoodScreen';
import { colors } from '../../styles/baseStyles';


class FoodScreenContainer extends Component {
  static navigationOptions = {
    header: () => ({
      style: { backgroundColor: colors.mainBrandColor }
    })
  };
  render() {
    return (
      <FoodScreen />
    );
  }
}

export default FoodScreenContainer;