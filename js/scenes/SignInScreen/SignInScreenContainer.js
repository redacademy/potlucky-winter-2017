import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SignInScreen from './SignInScreen';
import { userSignIn } from '../../redux/modules/userSignInActions';

class SignInScreenContainer extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  }

  static propTypes = {
    navigation: PropTypes.object,
    signInUser: PropTypes.func.isRequired,
    userSignedIn: PropTypes.bool.isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <SignInScreen
        navigation={navigation}
        onSignUpClick={this.props.signInUser}
        userSignedIn={this.props.userSignedIn}
      />
    );
  }
}

const mapStateToProps = state => ({
  userSignedIn: state.userSignIn.signedIn.signIn,
});

const mapDispatchToProps = dispatch => ({
  signInUser: (data) => {
    dispatch(userSignIn(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreenContainer);
