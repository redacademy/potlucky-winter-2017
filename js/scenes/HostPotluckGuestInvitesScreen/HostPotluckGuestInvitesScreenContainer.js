import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import HostPotluckGuestInvitesScreen from './HostPotluckGuestInvitesScreen';
import { fetchCurrentPotluckGuestlist } from '../../redux/modules/currentPotluckActions';
import styles from './styles';

class HostPotluckGuestInvitesScreenContainer extends Component {
  componentWillMount() {
    this.props.fetchCurrentPotluckGuestlist(this.props.currentPotluckId);
  }

  render() {
    const { isLoading } = this.props;

    return (
      <View style={styles.container}>
        {
          isLoading ? <Text>Loading...</Text> : <HostPotluckGuestInvitesScreen guestList={this.props.guestList} />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentPotluckId: state.currentPotluck.id,
  isLoading: state.isLoading,
  guestList: state.currentPotluck.potluckGuests,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentPotluckGuestlist: (currentPotluckId) => {
    dispatch(fetchCurrentPotluckGuestlist(currentPotluckId));
  },
});

HostPotluckGuestInvitesScreenContainer.defaultProps = {
  guestList: PropTypes.arrayOf(PropTypes.array),
};

HostPotluckGuestInvitesScreenContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  currentPotluckId: PropTypes.string.isRequired,
  fetchCurrentPotluckGuestlist: PropTypes.func.isRequired,
  guestList: PropTypes.arrayOf(PropTypes.array),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostPotluckGuestInvitesScreenContainer);
