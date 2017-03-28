import React, { PropTypes } from 'react';
import { Image, Text, Modal, TouchableWithoutFeedback, View } from 'react-native'

import styles from './styles.js'

export class Overlay extends React.Component {

  constructor() {
    super()

    this.state = {
      visible: true
    }
  }

  closeOverlay = () => {
    this.setState({ visible: false })
  }

  render() {
    const { children } = this.props;

    return (
      <View>
        {
          <Modal
            style={styles.modal}
            animationType={"fade"}
            transparent={true}
            visible={this.state.visible}
          >
            <View style={styles.modalView}>
              <View style={styles.closeButtonView}>
                <TouchableWithoutFeedback onPress={() => this.closeOverlay()}>
                  <Image style={styles.closeButtonImage} source={require('./img/close.png')} />
                </TouchableWithoutFeedback>
              </View>

              <View style={styles.contentContainer}>
                {children}
              </View>

            </View>
          </Modal>
        }
      </View>
    )
  }
}

Overlay.propTypes = {
  children: PropTypes.array,
  overlayId: PropTypes.string,
}

export const HighlightedOverlayText = ({ children, style }) => (
  <Text style={[styles.baseTextStyling, styles.highlightedText, style]}>
    {children}
  </Text>
)

HighlightedOverlayText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]).isRequired,
  style: PropTypes.objectOf(PropTypes.string).isRequired,
};

export const OverlayText = ({ children, style }) => (
  <Text style={[styles.baseTextStyling, style]}>
    {children}
  </Text>
)

OverlayText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]).isRequired,
  style: PropTypes.objectOf([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]).isRequired,
};
