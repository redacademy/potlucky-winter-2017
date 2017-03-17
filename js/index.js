import React, { Component, StatusBar, View } from 'react';
import { Provider, } from 'react-redux';
import firebase from 'firebase';
import Navigation from './navigation/NavigationLayout.ios';
import Store from './redux/store';
import { firebaseConfig } from '../config/firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class Potlucky extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
