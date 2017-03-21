import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoScreen from './InfoScreen';
import { fetchCurrentPotluck } from '../../redux/modules/currentPotluckActions';

class InfoScreenContainer extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCurrentPotluck(this.props.navigation.state.params.potluckId));
  }

  render() {
    return (
      <InfoScreen />
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userSignIn.uId,
  currentPotluck: state.currentPotluck,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(InfoScreenContainer);
