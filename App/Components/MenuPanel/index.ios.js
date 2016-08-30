'use strict';
import React, { Component,  PropTypes } from 'react';
import { ScrollView, Text, Image, TouchableOpacity,TouchableHighlight, View, NavigationExperimental} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
import SafariView from "react-native-safari-view";
const { jumpTo, pushRoute } = navigationActions;


class MenuPanel extends Component {
  constructor(props){
    super(props)
  }
  _pressfacebook(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "https://facebook.com/enactuskoreapage"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  _pressyoutube(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "https://youtube.com/enactuskorea"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  _pressflickr(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "https://flickr.com/enactuskorea"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  _pressIntro(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "http://blog.naver.com/enactusblog/220208208280"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  _pressArchive(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "http://enactuskorea.org/goarchive"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
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
        {this.props.navigation.routes.map( (panel, i) => {
          return (
            <TouchableHighlight underlayColor="#888"
              onPress={ () => {
                console.log(this.props);
                closeDrawer()
                const { dispatch } = this.props;
                if(panel.key === 'intro'){
                  this._pressIntro()
                }else if (panel.key === 'archive'){
                  this._pressArchive()
                }else{
                  dispatch(pushRoute({
                    key: panel.key,
                    title: panel.title,
                    showBackButton: false,
                  }, 'feed'))
                }}}
              key={ panel.key }>
              <View style={styles.btn}>
                <Icon style={styles.btnIcon} name={panel.name} size={20}></Icon>
                <Text style={styles.btnText}>{ panel.title }</Text>
              </View>
            </TouchableHighlight>
          );
        })}
          <View style={styles.channelCon}>
            <View style={styles.snsText}>
              <Text style={{fontSize: 16}}>Enactus Channel</Text>
            </View>
            <View style={styles.snsContainer} >
              <TouchableHighlight onPress={this._pressfacebook}>
                <Image source={require('../../Assets/facebook.png')} style={styles.snsIcon}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._pressyoutube}>
                <Image source={require('../../Assets/youtube.png')} style={styles.snsIcon} />
              </TouchableHighlight>
              <TouchableHighlight onPress={this._pressflickr}>
                <Image source={require('../../Assets/flickr.png')} style={styles.snsIcon}/>
              </TouchableHighlight>
            </View>
          </View>

      </View>
    )
    console.log(navigation.key)
  }
}


function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('panel')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPanel);
