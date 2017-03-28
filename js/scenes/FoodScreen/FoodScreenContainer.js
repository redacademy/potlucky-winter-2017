import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import FoodScreen from './FoodScreen';
import NavigationArrow from './../../components/NavigationArrow';
import { colors } from '../../styles/baseStyles';


class FoodScreenContainer extends Component {
  static navigationOptions = {
    header: ({ dispatch }) => ({
      left: <NavigationArrow
        onPress={() => (
          dispatch(NavigationActions.back())
        )}
        backArrow
      />,
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