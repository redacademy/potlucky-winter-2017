import React from 'react';
import { connect } from 'react-redux';
import Gandalf from 'gandalf-validator';
import { View, ScrollView, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import ValidatedText from './../ValidatedText';
import DatePicker from './../../components/DatePicker';
import GooglePlaces from './../../components/GooglePlaces';
import Map from './../../components/Map';
import SingleFlatButton from './../../components/SingleFlatButton';
import { addInfo } from '../../redux/modules/newPotluckActions';


class Form extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'title',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          title: 'Potluck Name',
          inputStyle: styles.login,
          inputContainerStyle: styles.inputContainerStyle,
          containerStyle: styles.container,
          titleStyle: styles.title,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'theme',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          title: 'Theme',
          inputStyle: styles.login,
          inputContainerStyle: styles.inputContainerStyle,
          containerStyle: styles.container,
          titleStyle: styles.title,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'description',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          title: 'Description',
          inputStyle: styles.description,
          inputContainerStyle: styles.descriptionContainer,
          containerStyle: styles.descriptionContainer,
          titleStyle: styles.title,
          multiline: true,
          numberOfLines: 4,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
    ];

    const initialLatitude = 49.2634011;
    const initialLongitude = -123.1382246;

    super(fields);

    this.state.eventDate = new Date();
    this.state.timeZoneOffsetInHours = (-1) * (new Date()).getTimezoneOffset() / 60;
    this.state.showEventDate = false;
    this.state.showArriveTime = false;
    this.state.showServeTime = false;
    this.state.arriveTime = new Date();
    this.state.serveTime = new Date();
    this.state.latitude = initialLatitude;
    this.state.longitude = initialLongitude;
  }

  onLocationChange = (location) => {
    this.setState({ location });
    this.setState({
      latitude: location.geometry.location.lat
    });
    this.setState({
      longitude: location.geometry.location.lng
    });
  };

  onEventDateChange = (eventDate) => {
    this.setState({ eventDate });
  };

  onArriveTimeChange = (time) => {
    this.setState({
      arriveTime: time
    });
  }

  onServeTimeChange = (time) => {
    this.setState({
      serveTime: time
    });
  }

  handleSubmit = () => {
    let data = this.getCleanFormData();
    if (!data) return;

    data = {
      ...data,
      eventDate: this.state.eventDate.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
      arriveTime: this.state.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      serveTime: this.state.serveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      location: this.state.location.formatted_address,
      coordinates: this.state.location.geometry.location
    };

    this.props.dispatch(addInfo(data));
  }

  render() {
    const fields = this.state.fields;
    const coordinates = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    };
    const imageSource = this.props.imageLink ? { uri: this.props.imageLink } : require('./../../../assets/images/camera-icon.png');
    const imageStyle = this.props.imageLink ? styles.image : styles.cameraImage;
    return (
      <View style={styles.mainContainer}>
        {fields.title.element}
        {fields.theme.element}
        <DatePicker
          title="Date"
          showDate={this.state.showEventDate}
          localDate={this.state.eventDate.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })}
          date={this.state.eventDate}
          onPress={() => { this.setState({ showEventDate: !this.state.showEventDate }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onEventDateChange}
          mode="date"
        />
        <DatePicker
          title="Arriving Time"
          showDate={this.state.showArriveTime}
          localDate={this.state.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          date={this.state.arriveTime}
          onPress={() => { this.setState({ showArriveTime: !this.state.showArriveTime }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onArriveTimeChange}
          mode="time"
        />
        <DatePicker
          title="Serving Time"
          showDate={this.state.showServeTime}
          localDate={this.state.serveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          date={this.state.serveTime}
          onPress={() => { this.setState({ showServeTime: !this.state.showServeTime }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onServeTimeChange}
          mode="time"
        />
        <TouchableHighlight
          style={styles.noImage}
          title={'pick a god damn image'}
          onPress={() => this.props.goToImage()}
        >
          <Image
            style={imageStyle}
            source={imageSource}
          />
        </TouchableHighlight >
        <GooglePlaces onLocationChange={this.onLocationChange} />
        <Map lat={this.state.latitude} lng={this.state.longitude} />
        {fields.description.element}
        <SingleFlatButton title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  if (state.newPotluck.potluckInfo) {
    return {
      imageLink: state.newPotluck.potluckInfo.link
    };
  }
  return { imageLink: false };
};


export default connect(mapStateToProps)(Form);
