import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuestPotluckInfoScreen from './GuestPotluckInfoScreen';
import { fetchCurrentPotluck } from '../../redux/modules/currentPotluckActions';
import { colors } from '../../styles/baseStyles';

class GuestPotluckInfoScreenContainer extends Component {
  static navigationOptions = {
    header: () => ({
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

export default connect(mapStateToProps)(GuestPotluckInfoScreenContainer);
