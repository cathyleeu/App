'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Post = require('./Post');
const Enactus = require('./NewsFeedScreen');
const Profile = require('./Profile');

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
          component: NewsFeedScreen, //가져올 (컴포넌트 이름).js
          title: 'Enactus' //App.js에서 설정한 title과 동일 해야함..
        }}
        />
    );
  }
  render(){
    return(
      <TabBarIOS
        barTintColor="#FFFFFF"
        tintColor="#E8B11D">
        <Icon.TabBarItem
          title="Post"
          selected={this.state.selectedTab === 'post'}
          iconName="ios-create-outline"
          selectedIconName="ios-create"
          onPress={()=> {
            this.setState({
              selectedTab :'post'
            })
          }}>
          <Post navigator={this.props.navigator} />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Enactus"
          selected={this.state.selectedTab === 'newsfeed'}
          iconName="ios-paper-outline"
          selectedIconName="ios-paper"
          onPress={()=> {
            this.setState({
              selectedTab : 'newsfeed'
            })
          }}>
          <Enactus navigator={this.props.navigator}/>
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Profile"
          selected={this.state.selectedTab === 'profile'}
          iconName="ios-contact-outline"
          selectedIconName="ios-contact"
          onPress={()=> {
            this.setState({
              selectedTab : 'profile'
            })
          }}>
          <Profile />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

module.exports = Tabs;
