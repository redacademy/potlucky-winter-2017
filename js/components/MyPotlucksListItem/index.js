import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const statusText = (isHost, isNew) => {
  if (isHost) {
    return <Text style={[styles.statusText, styles.statusHost]}>Host</Text>;
  }
  return isNew ?
    <Text style={[styles.statusText, styles.statusInvited]}>New</Text> :
    <Text style={[styles.statusText, styles.statusInvited]}>Going</Text>;
};

const MyPotlucksListItem = ({ navigate, title, description, eventDate, isHost, isNew, potluckId }) => (
  <TouchableOpacity onPress={() => navigate(isHost ? 'HostTabNavigator' : 'GuestTabNavigator', { potluckId })} >
    <View style={styles.myPotlucksListItemContainer}>
      <View style={styles.potImageContainer}>
        <Image style={styles.potImage} source={require('./img/poticon.png')} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <Text style={styles.description}>
          {description}{'\n'}
          and more...
        </Text>
        <View style={styles.statusRecievedContainer}>
          {statusText(isHost, isNew)}
          <Text style={styles.recieved}>{eventDate}</Text>
        </View>
      </View>

      <View style={styles.forwardArrowContainer}>
        <Image style={styles.forwardArrow} source={require('./img/forward-arrow.png')} />
      </View>
    </View>
  </TouchableOpacity>
);

export default MyPotlucksListItem;
