'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

const Post = require('./Post');
const NewsFeedScreen = require('./NewsFeedScreen');
const Profile = require('./Profile');
const Icon = require("react-native-vector-icons/FontAwesome");


class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'newsfeed'
    }
  }
  _renderContent(){
    return(
      <NavigatorIOS
        style={styles.wrapper}
        initialRoute={{
          component: NewsFeedScreen,
          title: 'Enactus'
        }}
        />
    );
  }
  render(){
    return(
      <TabBarIOS style={{backgroundColor: '#FFFFFF'}}>
        <TabBarIOS.Item
          title="Post"
          selected={this.state.selectedTab === 'post'}
          onPress={()=> {
            this.setState({
              selectedTab :'post'
            })
          }}>
          <Post />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Enactus"
          selected={this.state.selectedTab === 'newsfeed'}
          onPress={()=> {
            this.setState({
              selectedTab : 'newsfeed'
            })
          }}>
          <NewsFeedScreen navigator={this.props.navigator}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Profile"
          selected={this.state.selectedTab === 'profile'}
          onPress={()=> {
            this.setState({
              selectedTab : 'profile'
            })
          }}>
          <Profile />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = Tabs;
