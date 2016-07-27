'use strict';

import React, { Component } from 'react';
import { Image, TextInput, Text, CameraRoll, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, LayoutAnimation, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

class Post extends Component {
    constructor(props){
      super(props)
      this.state = {
        imageSource: null,
        videoSource: null
      }
    }

    selectPhotoTapped() {
      const options = {
        title: '사진 골라봐융',
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          var source;

          // You can display the image using either:
          source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

          // Or:
          // if (Platform.OS === 'android') {
          //   source = {uri: response.uri, isStatic: true};
          // } else {
          //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
          // }

          this.setState({
            imageSource: source
          });
        }
      });


    }
    selectVideoTapped() {
      const options = {
        title: 'Video Picker',
        takePhotoButtonTitle: 'Take Video...',
        mediaType: 'video',
        videoQuality: 'medium'
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled video picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          this.setState({
            videoSource: response.uri
          });
        }
      });
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
        <View>
          { this.state.imageSource === null ? <Text style={styles.imageContainer}>사진아 나와라</Text> :
            <Image style={styles.image} source={this.state.imageSource} />
          }
        </View>
        <View style={styles.funcContainer}>
          <View style={styles.funcIconCon}>
            <View style={styles.funcIcon}>
              <Icon name="ios-navigate" size={23} color="#8899a5" />
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Icon name="ios-camera" size={23} color="#8899a5" />
              </TouchableOpacity>
              <Icon name="ios-image" size={23} color="#8899a5" />
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


export default Post;

// module.exports = Post

// <CameraRollPicker
//   groupTypes='SavedPhotos'
//   batchSize={5}
//   maximum={5}
//   selected={this.state.selected}
//   assetType='Photos'
//   imagesPerRow={3}
//   imageMargin={1}
//   callback={this.getSelectedImages.bind(this)} />

//
// <View style={styles.imageGrid}>
//   <View style={styles.imageIcon}><Icon name="ios-camera" size={80} color="#a9a9a9" /></View>
//   {this.state.images.map((image, index) =>
//       <View key={index} style={styles.imageIcon}>
//         <Image style={styles.image} source={{ uri: image.uri }} />
//       </View> )}
// </View>
