'use strict';

import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App/Components/App';


class Enactus extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('Enactus', () => Enactus);
