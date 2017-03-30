import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { colors, typography, windowHeight as height } from '../../styles/baseStyles';
import SingleFlatButton from '../../components/SingleFlatButton';
import { createNewPotluck } from '../../redux/modules/newPotluckActions';
import PotluckConfirmationScreen from './PotluckConfirmationScreen';
import styles from './styles';

class PotluckConfirmationScreenContainer extends Component {
  static navigationOptions = {
    header: {
      title: 'Confirmation',
      titleStyle: {
        fontSize: typography.headerFontSize
      },
      tintColor: 'white',
      style: {
        backgroundColor: colors.mainBrandColor,
        height: height * 0.13
      }
    },
    tabBar: () => ({
      visible: false
    })
  }

  onConfirmHandler = () => {
    if (!this.props.newPotluck.potluckInfo.link) {
      console.log('test1');
      const data = {
        ...this.props.newPotluck,
        potluckInfo: {
          ...this.props.newPotluck.potluckInfo, link: 'http://i.imgur.com/XyPXAaT.png'
        }
      };
      console.log(data);
      this.props.createNewPotluck(data, this.props.userId);
      this.props.navigation.navigate('HomeScreenNavigator');
    } else {
      this.props.createNewPotluck(this.props.newPotluck, this.props.userId);
      this.props.navigation.navigate('HomeScreenNavigator');
    }
  }

  render() {
    const newPotluck = this.props.newPotluck.potluckInfo;

    return (
      <View style={styles.container}>
        {
          newPotluck &&
          <PotluckConfirmationScreen currentPotluck={newPotluck} />
        }
        <View style={styles.buttonContainer}>
          <SingleFlatButton
            title={'Confirm'}
            onPress={this.onConfirmHandler}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  newPotluck: state.newPotluck,
  userId: state.userSignIn.uId,
});

const mapDispatchToProps = dispatch => ({
  createNewPotluck: (data, userId) => {
    dispatch(createNewPotluck(data, userId));
  },
});

PotluckConfirmationScreenContainer.propTypes = {
  newPotluck: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  createNewPotluck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PotluckConfirmationScreenContainer);
