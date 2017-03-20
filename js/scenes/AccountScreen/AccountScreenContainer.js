
import React from 'react';
import { Image } from 'react-native';
import AccountScreen from './AccountScreen';

class AccountScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'Account',
    tabBar: () => ({
      icon: (
        <Image style={{ height: 30, width: 25 }} source={require('../../../assets/images/accounticon.png')} />
      ),
    })
  };

  constructor() {
    super()
  }

  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <AccountScreen 
        navigate={navigate}
        />
    );
  }
}

export default AccountScreenContainer;