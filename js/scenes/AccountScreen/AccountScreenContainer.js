import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { colors, typography } from '../../styles/baseStyles';
import AccountScreen from './AccountScreen';
import NavigationArrow from '../../components/NavigationArrow';

class AccountScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'Account',
    tabBar: () => ({
      icon: (
        <Image style={{ height: 30, width: 25, marginTop: 10 }} source={require('../../../assets/images/accounticon.png')} />
      ),
    }),
    header: ({ goBack }) => ({
      style: { backgroundColor: colors.mainBrandColor, paddingLeft: 20, paddingRight: 20 },
      titleStyle: { color: 'white', fontFamily: typography.fontMain },
      left: (
        <NavigationArrow
          backArrow
          onPress={() => goBack(null)}
        />
      )
    }),
  };

  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <AccountScreen
        navigate={navigate}
        firstName={this.props.userName.firstName}
        lastName={this.props.userName.lastName}
        email={this.props.userName.email}
      />
    );
  }
}

AccountScreenContainer.propTypes = {
  userName: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userName: state.userSignIn.userName,
});


export default connect(mapStateToProps)(AccountScreenContainer);
