// Index.ios.js - Place code here for iOS

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header headerText={'Albums'} />
);

AppRegistry.registerComponent('Albums', () => App);