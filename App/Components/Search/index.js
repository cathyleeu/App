'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-search-bar';
import fuzzy from 'fuzzy';

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          for Search
        </Text>
        <TouchableHighlight onPress={this.props.onClose}>
          <Icon name='ios-close' size={30}  />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

Search.propTypes = {
	onClose: React.PropTypes.func.isRequired
};
// module.exports = Search;
export default Search;
