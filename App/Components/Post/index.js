'use strict';

import React, { Component } from 'react';
import { Image, TextInput, Text, CameraRoll, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, LayoutAnimation, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import Camera from './camera';

class Post extends Component {
  // onCamera(){
  //   return (
  //     <View>
  //       <Camera />
  //     </View>
  //   )
  // }
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
              <TouchableOpacity onPress={this.props.onCamera}>
                <Icon name="ios-camera" size={23} color="#8899a5" />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.onImagePicker}>
                <Icon name="ios-image" size={23} color="#8899a5" />
              </TouchableOpacity>
            </View>
            <View style={styles.funcBtn}>
              <TouchableHighlight style={styles.activeBtn}>
                <Text style={styles.activeBtnText}>Post</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
Post.propTypes = {
	onCamera: React.PropTypes.func.isRequired,
  onImagePicker: React.PropTypes.func.isRequired,
};

export default Post;

// module.exports = Post







// 이미전 소스 전달

// <View>
//   { this.state.imageSource === null ? <Text style={styles.imageContainer}>사진아 나와라</Text> :
//     <Image style={styles.image} source={this.state.imageSource} />
//   }
// </View>
