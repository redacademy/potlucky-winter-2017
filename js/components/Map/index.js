import React, { PropTypes } from 'react';
import MapView from 'react-native-maps';

const Map = ({ coordinates }) => (
  <MapView
    style={{
      height: 150,
      width: '100%',
      marginBottom: 13
    }}
    region={{
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <MapView.Marker
      coordinate={coordinates}
    />
  </MapView>
);

Map.propTypes = {
  coordinates: PropTypes.object.isRequired,
};

export default Map;
