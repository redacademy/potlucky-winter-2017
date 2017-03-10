import React, { Component } from 'react';
import { StatusBar, } from 'react-native';
import {
  NavigationContext,
	NavigationProvider,
	NavigationStyles,
	StackNavigation,
} from '@exponent/ex-navigation';
import { Provider, } from 'react-redux';

import Router from  './navigation/router';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});

export default class Potlucky extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider router={Router} context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            navigatorUID="root"
            id="root"
            initialRoute={Router.getRoute('layout')}
            defaultRouteConfig={{
              styles: { ...NavigationStyles.SlideVertical, },
            }}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}