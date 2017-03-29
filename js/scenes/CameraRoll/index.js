import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {
  CameraRoll,
  Image,
  ScrollView,
  TouchableHighlight,
  View,
  NativeModules
} from 'react-native';
import styles from './styles';
import { imageUpload } from './../../redux/modules/newPotluckActions';

class CameraRollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selected: '',
      fetchParams: { first: 25 },
      groupTypes: 'SavedPhotos',
    };
    this._selectImage = this._selectImage.bind(this);
  }

  componentDidMount() {
    // get photos from camera roll
    CameraRoll.getPhotos({ first: 100 }).done(
      (data) => {
        const images = data.edges.map(asset => asset.node.image);
        this.setState({
          images,
        });
      },
      (error) => {
        console.warn(error);
      }
    );
  }

  _selectImage(uri) {
    // define whatever you want to happen when an image is selected here
    this.setState({
      selected: uri,
    });
    NativeModules.RNImageToBase64.getBase64String(uri, (err, base64) => {
      this.props.dispatch(imageUpload(base64));
      const backAction = NavigationActions.back()
      this.props.navigation.dispatch(backAction)
    });
  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
            {this.state.images.map(image => (
              <TouchableHighlight style={styles.imageContainer} key={image.uri} onPress={() => this._selectImage(image.uri)}>
                <Image style={styles.image} source={{ uri: image.uri }} />
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(CameraRollView);
