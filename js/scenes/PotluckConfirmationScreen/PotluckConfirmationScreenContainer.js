import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { colors, typography, windowHeight as height } from '../../styles/baseStyles';
import PotluckInfo from '../../components/PotluckInfo';
import SingleFlatButton from '../../components/SingleFlatButton';
import { createNewPotluck } from '../../redux/modules/newPotluckActions';
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
    this.props.createNewPotluck(this.props.newPotluck, this.props.userId);

    // TODO go somewhere
  }

  render() {
    return (
      <View style={styles.container}>
        <PotluckInfo
          title={'TEST'}
          image={require('../../../assets/images/southparklastsupper.jpg')}
          date={'12-12-12'}
          arrivingTime={'12:00am'}
          servingTime={'12:01am'}
          location={'canda'}
          description={'yum fod for every1,'}
        />

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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PotluckConfirmationScreenContainer);
