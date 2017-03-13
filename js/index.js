import React, { Component } from 'react';
import { Provider, } from 'react-redux';

import Navigation from './navigation/NavigationLayout.ios';
import Router from  './navigation/router';
import Store from './redux/store';

export default class Potlucky extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}