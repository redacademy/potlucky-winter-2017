import React, { PropTypes } from 'react';
import MyPotlucksScreen from './MyPotlucksScreen';
import { connect } from 'react-redux';
import { ListView, Image } from 'react-native';
import { fetchMyPotlucks } from '../../redux/modules/myPotlucksActions';

class MyPotlucksScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'My Potlucks',
    tabBar: () => ({
      icon: (
        <Image style={{ height: 30, width: 30 }} source={require('../../../assets/images/potbottom.png')} />
      ),
    })
  };

  constructor(props) {
    super(props);
  }

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
