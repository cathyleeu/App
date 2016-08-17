'use strict';

import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, Animated, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-search-bar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles'
import fuzzy from 'fuzzy';
import TabBar from './TabBar'
import Anonymous from './searchAnonymous'
import Member from './searchMember'
import SearchTag from './searchTag'
import SearchFeed from './searchFeed'


class Search extends Component {
  constructor(){
    super()
    this.state = {
      title: '피드'
    }
  }
  // componentDidMount() {
  //   StatusBarIOS.setStyle(1);
  // }
  // _updateTitle(obj){
  //   const {i} = obj
  //   switch (i) {
  //     case 0:
  //
  //       break;
  //     default:
  //
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          ref='searchBar'
          placeholder='Search'
          barTintColor= '#ffffff'
          textFieldBackgroundColor = '#ccc'
          hideBackground ={true}
        />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <TabBar />}>
          <SearchFeed tabLabel="md-apps" />
          <Anonymous tabLabel="md-eye-off" />
          <SearchTag tabLabel="md-bookmark" />
          <Member tabLabel="md-contact" />
        </ScrollableTabView>
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
