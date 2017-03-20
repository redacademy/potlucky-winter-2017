import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SignUpScreen from './SignUpScreen';
import { userSignUp } from '../../redux/modules/userSignInActions';

class SignUpScreenContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    signUpUser: PropTypes.func.isRequired,
    userSignedUp: PropTypes.bool.isRequired,
  };

  static navigationOptions = {
    title: 'Sign Up'
  }

  render() {
    const { navigation } = this.props;

    return (
      <SignUpScreen
        navigation={navigation}
        onSignUpClick={this.props.signUpUser}
        userSignedUp={this.props.userSignedUp}
      />
    );
  }
}

const mapStateToProps = state => ({
  userSignedUp: state.userSignIn.signedIn.signUp,
});

const mapDispatchToProps = dispatch => ({
  signUpUser: (data) => {
    dispatch(userSignUp(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreenContainer);
