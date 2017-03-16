import React, { Component } from 'react';
import { Provider, } from 'react-redux';
import firebase from 'firebase';
import Navigation from './navigation/NavigationLayout.ios';
import Store from './redux/store';

// Initialize Firebase
const firebaseUrl = 'https://potlucky-16935.firebaseio.com';
const firebaseConfig = {
  apiKey: 'AIzaSyBjur9LPm-W7zZE_p4zOlKqYwsO3eviaP8',
  authDomain: 'potlucky-16935.firebaseapp.com',
  databaseURL: firebaseUrl,
  storageBucket: 'potlucky-16935.appspot.com',
  messagingSenderId: '821037068529',
};

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
