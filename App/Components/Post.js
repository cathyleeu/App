'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  CameraRoll,
  View,
  TouchableHighlight
} from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';

class Post extends Component {
  constructor(){
    super()
    this.state = {
      images: [],
    }
  }
  componentDidMount(){
    const fetchParams = {
      first: 5
    }
    CameraRoll.getPhotos(fetchParams).done((data) => this.storeImages(data), (err) => this.logImageError(err))
  }
  storeImages(data) {
    const assets = data.edges;
    const images = assets.map((asset) => asset.node.image);
    this.setState({
      images: images,
    })
  }
  logImageError(err){
    console.log(err)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require('../Assets/user.png')}></Image>
        </View>
        <TextInput
          ref="textarea"
          style={styles.textArea}
          multiline={true}
          placeholder="너의 하루를 말해봐봐봡？"
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          />
        <View style={styles.funcContainer}>
          <View style={styles.funcIconCon}>
            <View style={styles.funcIcon}>
              <Icon name="ios-navigate" size={23} color="#8899a5" />
              <Icon name="ios-camera" size={23} color="#8899a5" />
              <Icon name="ios-image" size={23} color="#8899a5" />
            </View>
            <View style={styles.funcBtn}>
              <TouchableHighlight style={styles.activeBtn}>
                <Text style={styles.activeBtnText}>Post</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.imageGrid}>
            <View style={styles.imageIcon}><Icon name="ios-camera" size={80} color="#a9a9a9" /></View>
            {this.state.images.map((image, index) => <View key={index} style={styles.imageIcon}><Image style={styles.image} source={{ uri: image.uri }} /></View>)}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:30,
    height:Util.size.height,
  },
  icon:{
    width:30,
    height:30,
    borderRadius:5,
  },
  iconContainer:{
    paddingLeft:15,
    paddingRight:15,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  textArea:{
    height:335,
    padding:15,
    fontSize:20
  },
  funcContainer:{
   height:275,
   width:375,
   position:"absolute",
   bottom:50,
   left:0,
   borderTopWidth:1,
   borderTopColor:"#a0adb7"
 },
 funcIconCon:{
   height:50,
   alignItems:"center",
   justifyContent:"space-between",
   flexDirection:"row",
   borderBottomWidth:1,
   borderBottomColor:"#ccd6dd"
 },
 funcIcon:{
   width:210,
   flexDirection:"row",
   justifyContent:"space-around"
 },
 funcBtn:{
   width:110,
   flexDirection:"row",
   justifyContent:"space-around",
   alignItems:"center",
 },
 btn:{
   height:35,
   width:60,
   alignItems:"center",
   justifyContent:"center",
   borderRadius:6,
   borderColor:"#ccd6dd",
   borderWidth:1
 },
 activeBtn:{
   height:35,
   width:60,
   alignItems:"center",
   justifyContent:"center",
   borderRadius:6,
   backgroundColor:"#E8B11D"
 },
 btnText:{
   color:"#ccd6dd",
   fontSize:14
 },
 activeBtnText:{
   color:"#fff",
   fontSize:14
 },
 imageGrid:{
   flexDirection:"row",
   flexWrap:"wrap"
 },
 imageIcon:{
   width: Util.size.width/3,
   height:113,
   alignItems:"center",
   justifyContent:"center",
   borderRightColor:"#ddd",
   borderBottomColor:"#ddd",
   borderRightWidth:1,
   borderBottomWidth:1
 },
 image:{
   width: Util.size.width/3,
   height:113
 },
});

module.exports = Post;
