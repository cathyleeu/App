import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import styles from './styles.imagePicker'

class ImagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: [],
    };
  }

  getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images,
    });

    console.log(current);
    console.log(this.state.selected);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={this.props.onClose}>
            <Text style={styles.text}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}><Text style={styles.bold}>{this.state.num}</Text>선택</Text>
          </TouchableOpacity>
        </View>
        <CameraRollPicker
          groupTypes='SavedPhotos'
          batchSize={5}
          maximum={3}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={1}
          callback={this.getSelectedImages.bind(this)} />
      </View>
    );
  }
}
ImagePicker.propTypes = {
	onClose: React.PropTypes.func.isRequired
};

export default ImagePicker;
