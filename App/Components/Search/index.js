'use strict';

import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, Animated, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-search-bar';
import ScrollableTab from 'react-native-scrollable-tab-view';
import styles from './styles'
import fuzzy from 'fuzzy';


class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          ref='searchBar'
          placeholder='Search'
          onChangeText={(text)=> this._onChangeText(text)}
        />
        <TouchableHighlight onPress={this.props.onClose}>
          <Icon name='ios-close' size={30}  />
        </TouchableHighlight>
      </View>
    );
  }
}


Search.propTypes = {
	onClose: React.PropTypes.func.isRequired
};
// module.exports = Search;
export default Search;
