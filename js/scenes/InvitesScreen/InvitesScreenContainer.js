import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import InvitesScreen from './InvitesScreen';
import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';
import NavigationArrow from '../../components/NavigationArrow';
import { progressBar } from '../../constants';

class InvitesScreenContainer extends Component {
  static navigationOptions = {
    title: 'Invites',
    header: ({ navigate }) => ({
      style: {
        height: 0,
        margin: 0,
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20
      },
      title: <CreatePotluckProgressBar
        title="Invites"
        progressNumber={progressBar.FOURTH_SCREEN}
      />,

      left: (
        <NavigationArrow
          backArrow
          onPress={() => navigate('PotLuckInfoScreen')}
        />
      ),
    })
  }

  render() {
    return (
      <InvitesScreen
        navigateTo={() => (this.props.navigation.navigate('ConfirmationScreen'))}
        goTo={() => this.props.navigation.navigate('PotLuckInfoScreen')}
      />
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  // TODO add dispatchToProps functions when reducer completed
});

InvitesScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitesScreenContainer);
