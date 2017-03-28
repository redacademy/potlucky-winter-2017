import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { fetchPotluckFood } from '../../redux/modules/potluckFoodActions';

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
      style: { backgroundColor: colors.mainBrandColor, paddingLeft: 20, paddingRight: 20 }
    })
  };

  componentWillMount() {
    this.props.dispatch(fetchPotluckFood(this.props.navigation.state.params.potluckId));
  }

  render() {
    const { userId, userName, potluckFood, isLoading } = this.props;
    return (
      <FoodScreen potluckFood={potluckFood} userId={userId} userName={userName} isLoading={isLoading} />
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userSignIn.uId,
  userName: state.userSignIn.userName,
  potluckFood: state.potluckFood,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(FoodScreenContainer);
