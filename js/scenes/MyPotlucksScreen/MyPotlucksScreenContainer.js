import React, { PropTypes } from 'react';
import MyPotlucksScreen from './MyPotlucksScreen';
import { connect } from 'react-redux';
import { ListView, Image } from 'react-native';
import { fetchMyPotlucks } from '../../redux/modules/myPotlucksActions';
import { colors, typography } from '../../styles/baseStyles';
import NavigationArrow from '../../components/NavigationArrow';

class MyPotlucksScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'My Potlucks',
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
    tabBar: () => ({
      icon: (
        <Image style={{ height: 30, width: 25, marginTop: 10 }} source={require('../../../assets/images/potbottom.png')} />
      ),

    })
  };

  componentWillMount() {
    this.props.dispatch(fetchMyPotlucks(this.props.userId));
  }

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  getPotlucks = () => Object.values(this.props.myPotlucks);

  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <MyPotlucksScreen navigate={navigate} dataSource={this.ds.cloneWithRows(this.getPotlucks())} isLoading={this.props.isLoading} />
    );
  }
}

MyPotlucksScreenContainer.defaultProps = ({
  myPotlucks: {}
});

MyPotlucksScreenContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  myPotlucks: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  userId: state.userSignIn.uId,
  myPotlucks: state.myPotlucks,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(MyPotlucksScreenContainer);
