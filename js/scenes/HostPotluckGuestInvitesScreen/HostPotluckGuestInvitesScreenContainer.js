import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HostPotluckGuestInvitesScreen from './HostPotluckGuestInvitesScreen';
import { fetchCurrentPotluckGuestlist } from '../../redux/modules/currentPotluckActions';

class HostPotluckGuestInvitesScreenContainer extends Component {
  componentDidMount() {
    this.props.fetchCurrentPotluckGuestlist(this.props.currentPotluckId);
  }

  render() {
    return (
      <HostPotluckGuestInvitesScreen
        // currentPotluck={this.props.guestList}
      />
    );
  }
}

const mapStateToProps = state => ({
  // userId: state.userSignIn.uId,
  currentPotluckId: state.currentPotluck.id,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentPotluckGuestlist: (currentPotluckId) => {
    dispatch(fetchCurrentPotluckGuestlist(currentPotluckId));
  },
});

HostPotluckGuestInvitesScreenContainer.propTypes = {
  fetchCurrentPotluckGuestlist: PropTypes.func.isRequired,
  currentPotluckId: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostPotluckGuestInvitesScreenContainer);
