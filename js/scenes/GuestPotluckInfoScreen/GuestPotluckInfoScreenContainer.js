import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import GuestPotluckInfoScreen from './GuestPotluckInfoScreen';
import { fetchCurrentPotluck } from '../../redux/modules/currentPotluckActions';
import { setMessage } from '../../redux/modules/messageActions';
import { colors } from '../../styles/baseStyles';
import NavigationArrow from './../../components/NavigationArrow';
import api from '../../services/api/pot-lucks';

class GuestPotluckInfoScreenContainer extends Component {
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
    this.props.dispatch(fetchCurrentPotluck(this.props.navigation.state.params.potluckId));
  }

  actionInvite = (data) => {
    const { currentPotluck, userId } = this.props;
    api.actionInvite(data, currentPotluck.id, userId);
    this.props.dispatch(setMessage(data.inviteSelection));
  }

  render() {
    const { isLoading, currentPotluck, message } = this.props;
    return (
      isLoading ?
        null :
        <GuestPotluckInfoScreen
          currentPotluck={currentPotluck}
          actionInvite={this.actionInvite}
          message={!!message}
        />
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userSignIn.uId,
  currentPotluck: state.currentPotluck,
  isLoading: state.isLoading,
  message: state.message,
});

GuestPotluckInfoScreenContainer.propTypes = {
  navigation: PropTypes.func.isRequired,
  currentPotluck: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};


export default connect(mapStateToProps)(GuestPotluckInfoScreenContainer);
