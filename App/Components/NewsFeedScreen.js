'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import NewsFeedList from './NewsFeedList'

class NewsFeedScreen extends Component {
  render() {
    return (
      <View >
        <NewsFeedList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

module.exports = NewsFeedScreen;
