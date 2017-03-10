/**
 * @providesModule NavigationLayout
 * @flow
 */

import React, { Component, } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';

import Router from './router';

export default class NavigationLayout extends Component {
  render() {
    return (
		<TabNavigation
			initialTab="hello"
		>
			<TabNavigationItem
			id="hello"
			title="NavigationLayout.ios.js Title"
			renderTitle={this.renderTitle}
			>
			<StackNavigation
			navigatorUID="hello"
			initialRoute={Router.getRoute('hello')}
			/>
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  renderTitle(isSelected, title) {
    return (
      <Text>{title}</Text>
    );
  }
}