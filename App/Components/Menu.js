'use strict';

import React, { Component } from 'react';
import { Image,StyleSheet,StatusBarIOS,Text,TouchableHighlight,PanResponder,LayoutAnimation,ScrollView,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends Component {
  render() {
    return (
      <View style={styles.btnContainer}>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="map-marker" size={15}></Icon>
              <Text style={styles.btnText}>你的地点</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="pencil-square" size={15}></Icon>
              <Text style={styles.btnText}>你的贡献</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="product-hunt" size={15}></Icon>
              <Text style={styles.btnText}>离线区域</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.btnContainer}>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="road" size={15}></Icon>
              <Text style={styles.btnText}>实时路况</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="bus" size={15}></Icon>
              <Text style={styles.btnText}>公交线路</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="bicycle" size={15}></Icon>
              <Text style={styles.btnText}>骑车线路</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="photo" size={15}></Icon>
              <Text style={styles.btnText}>卫星图像</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="tree" size={15}></Icon>
              <Text style={styles.btnText}>地形</Text>
            </View>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = Menu;
