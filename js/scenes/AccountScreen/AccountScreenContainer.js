import React from 'react';
import AccountScreen from './AccountScreen'

class AccountScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'Account Screen',
  };

  constructor() {
    super()
  }

  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <AccountScreen navigate={navigate} />
    );
  }
}

export default AccountScreenContainer