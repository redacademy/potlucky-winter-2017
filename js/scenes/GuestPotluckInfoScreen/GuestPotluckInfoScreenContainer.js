import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import GuestPotluckInfoScreen from './GuestPotluckInfoScreen';
import { fetchCurrentPotluck } from '../../redux/modules/currentPotluckActions';
import { colors } from '../../styles/baseStyles';
import NavigationArrow from './../../components/NavigationArrow';

class GuestPotluckInfoScreenContainer extends Component {
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

  componentWillMount() {
    this.props.dispatch(fetchCurrentPotluck(this.props.navigation.state.params.potluckId));
  }

  render() {
    return (
      <GuestPotluckInfoScreen currentPotluck={this.props.currentPotluck} />
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userSignIn.uId,
  currentPotluck: state.currentPotluck,
  isLoading: state.isLoading,
});

GuestPotluckInfoScreenContainer.propTypes = {
  navigation: PropTypes.func.isRequired,
  currentPotluck: PropTypes.object.isRequired
};


export default connect(mapStateToProps)(GuestPotluckInfoScreenContainer);
