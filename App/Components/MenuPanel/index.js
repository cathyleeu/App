'use strict';
import React, { Component,  PropTypes } from 'react';
import { ScrollView, Text, Image, TouchableOpacity,TouchableHighlight, View, Navigator} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import Unknown from '../Unknown'
import Network from '../Network'
import Tabs from '../Tabs'


class MenuPanel extends Component {
  gotoMenu(navigator, key){
    navigator.push()
  }
  render() {
    let {closeDrawer} = this.props
    return (
      <View style={styles.sideMenuContainer}>
        <View style={styles.control}>
          <View style={styles.imageCon}>
            <Image
              source={require('../../Assets/logo.png')}
              style={styles.logoimage}/>
          </View>
          <TouchableHighlight style={styles.close} onPress={closeDrawer}>
            <Icon name='ios-close' size={30} color="white" />
          </TouchableHighlight>
        </View>
        <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="ios-chatbubbles" size={20}></Icon>
              <Text style={styles.btnText}>뉴스피드</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="md-share" size={20}></Icon>
            <Text style={styles.btnText}>인액터스 소개</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="md-git-network" size={20}></Icon>
              <Text style={styles.btnText}>네트워크</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
              <View style={styles.btn}>
                <Icon style={styles.btnIcon} name="md-volume-down" size={20}></Icon>
                <Text style={styles.btnText}>대나무숲</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
              <View style={styles.btn}>
                <Icon style={styles.btnIcon} name="md-cloud-download" size={20}></Icon>
                <Text style={styles.btnText}>아카이브</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
              <View style={styles.btn}>
                <Icon style={styles.btnIcon} name="ios-people" size={20}></Icon>
                <Text style={styles.btnText}>멤버십 소개</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
              <View style={styles.btn}>
                <Icon style={styles.btnIcon} name="ios-mail-outline" size={20}></Icon>
                <Text style={styles.btnText}>1:1 메세지</Text>
              </View>
          </TouchableHighlight>
          <View style={styles.channelCon}>
            <View style={styles.snsText}>
              <Text style={{fontSize: 16}}>Enactus Channel</Text>
            </View>
            <View style={styles.snsContainer} >
              <TouchableHighlight>
                <Image source={require('../../Assets/facebook.png')} style={styles.snsIcon}/>
              </TouchableHighlight>
              <TouchableHighlight>
                <Image source={require('../../Assets/youtube.png')} style={styles.snsIcon} />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image source={require('../../Assets/flickr.png')} style={styles.snsIcon}/>
              </TouchableHighlight>
            </View>
          </View>

      </View>
    )
  }
}


export default MenuPanel;
