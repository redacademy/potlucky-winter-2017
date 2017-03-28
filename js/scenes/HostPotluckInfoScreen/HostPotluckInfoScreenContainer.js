import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HostPotluckInfoScreen from './HostPotluckInfoScreen';
import { fetchCurrentPotluck } from '../../redux/modules/currentPotluckActions';

class HostPotluckInfoScreenContainer extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCurrentPotluck(this.props.navigation.state.params.potluckId));
  }

  render() {
    return (
      <HostPotluckInfoScreen currentPotluck={this.props.currentPotluck} />
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userSignIn.uId,
  currentPotluck: state.currentPotluck,
  isLoading: state.isLoading,
});

HostPotluckInfoScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  currentPotluck: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(HostPotluckInfoScreenContainer);
