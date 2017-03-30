import React, { PropTypes } from 'react';
import MapView from 'react-native-maps';

const Map = ({ lat, lng }) => (
  <MapView
    style={{
      height: 150,
      width: '100%',
      marginBottom: 13
    }}
    region={{
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <MapView.Marker
      coordinate={
      {
        latitude: lat,
        longitude: lng
      }
      }
    />
  </MapView>
);

export default Map;
