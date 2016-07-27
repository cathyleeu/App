'use strict';

import React, { Component } from 'react';
import { Image, TextInput, Text, CameraRoll, View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

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
          <Image style={styles.icon} source={require('../../Assets/user.png')}></Image>
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

// module.exports = Post
export default Post;
