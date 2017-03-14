import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SignInSignUpScreen from './SignInSignUpScreen';

class SignInSignUpScreenContainer extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  };
  
   static navigationOptions = {
    header: {
      visible: false
    }
   }

  componentWillMount() {

  }

  render() {
    const { navigation } = this.props
    return (
		<SignInSignUpScreen navigation={navigation} />
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(SignInSignUpScreenContainer);