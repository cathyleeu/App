'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'
import NewsFeedList from './NewsFeedList'

class NewsFeedScreen extends Component {
  render() {
    return (
      <View>
        <Swiper style={styles.default} height={200} autoplay={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}> Test 01 </Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}> Test 02 </Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}> Test 03 </Text>
          </View>
        </Swiper>
        <NewsFeedList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },

    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },

    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },

    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
});

module.exports = NewsFeedScreen;
