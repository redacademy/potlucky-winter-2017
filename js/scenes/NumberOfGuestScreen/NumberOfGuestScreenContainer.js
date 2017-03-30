import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';

import NumberOfGuestScreen from './NumberOfGuestScreen';
import { changeNumberofGuests } from '../../redux/modules/newPotluckActions';

import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';

import NavigationArrow from '../../components/NavigationArrow';

import { progressBar } from '../../constants';


const guestImageWidth = 153;
const guestImageHeight = 195;
const guestImageHeightWidthRatio = guestImageHeight / guestImageWidth;

class NumberOfGuestScreenContainer extends React.Component {
  static navigationOptions = {
    header: ({ goBack }) => ({
      style: {
        height: 0,
        margin: 0,
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20
      },
      title: <CreatePotluckProgressBar title="Number of Guests" progressNumber={progressBar.FIRST_SCREEN} />,
      left: (
        <NavigationArrow
          backArrow
          onPress={() => goBack(null)}
        />
      ),
    }),
  };

  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.guestStartSize = 60;
    this.guestImageSources = [
      require('../../../assets/images/guests/1.png'),
      require('../../../assets/images/guests/2.png'),
      require('../../../assets/images/guests/3.png'),
      require('../../../assets/images/guests/4.png'),
      require('../../../assets/images/guests/5.png'),
      require('../../../assets/images/guests/6.png'),
      require('../../../assets/images/guests/7.png'),
      require('../../../assets/images/guests/8.png'),
      require('../../../assets/images/guests/9.png'),
      require('../../../assets/images/guests/10.png'),
    ];
  }

  componentWillMount() {
    this.calculateGuestImageSize();
    this.generateGuestImageArray();
  }
  componentDidUpdate() {
    const { count } = this.state;
    this.props.dispatch(changeNumberofGuests(count));
    this.calculateGuestImageSize();
    this.generateGuestImageArray();
  }

  onTextChange = (text) => {
    if (text === '') {
      this.setState({ count: 0 });
      return;
    }
    const reg = /(^\d+$)/;
    if (reg.test(text)) {
      if (text.indexOf(0) !== 0) {
        this.setState({ count: text });
      } else {
        this.setState({ count: text.substring(1) });
      }
    }
  }

  increase = () => this.setState({ count: parseInt(this.state.count, 10) + 1 });

  decrease = () => {
    if (this.state.count > 0) {
      this.setState({ count: parseInt(this.state.count, 10) - 1 });
    }
  }

  calculateGuestImageSize = () => {
    if (this.state.count > 36) {
      this.guestStartSize = 30;
    } else if (this.state.count > 30) {
      this.guestStartSize = 32;
    } else if (this.state.count > 25) {
      this.guestStartSize = 34;
    } else if (this.state.count > 20) {
      this.guestStartSize = 37;
    } else if (this.state.count > 16) {
      this.guestStartSize = 40;
    } else if (this.state.count > 12) {
      this.guestStartSize = 47;
    } else if (this.state.count > 8) {
      this.guestStartSize = 50;
    } else if (this.state.count > 4) {
      this.guestStartSize = 55;
    }
  }

  generateGuestImageArray = () => {
    this.guestImages = [];
    for (let i = 0; i < this.state.count; i += 1) {
      if (i >= 42) break;

      this.guestImages.push(
        <View key={i}>
          <Image
            style={{ height: this.guestStartSize * guestImageHeightWidthRatio, width: this.guestStartSize, marginLeft: 5, marginRight: 5 }}
            source={this.guestImageSources[i % this.guestImageSources.length]}
          />
        </View>
      );
    }
    this.props.dispatch(changeNumberofGuests(this.state.count));
  }

  render() {
    const { navigate } = this.props.navigation;

    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <NumberOfGuestScreen
        navigate={navigate}
        guestImages={this.guestImages}
        count={this.state.count}
        onTextChange={this.onTextChange}
        increase={this.increase}
        decrease={this.decrease}
        goTo={() => this.props.navigation.navigate('FoodPlanningScreen')}
      />
    );
  }
}

NumberOfGuestScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  guests: state.newPotluck.potluckFood.guestCount
});

NumberOfGuestScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(NumberOfGuestScreenContainer);
