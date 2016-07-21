'use strict';

import React, { Component } from 'react';
import { Image,StyleSheet,StatusBarIOS,Text,TouchableHighlight,PanResponder,LayoutAnimation,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewsFeedScreen from './NewsFeedScreen'
import Community from './Community'
import Channels from './Channels'
import Util from './utils';

class Menu extends Component {
  render() {
    return (
      <View style={styles.menuContainer}>
        <TouchableHighlight onPress={() => this.props.getScene(0)}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Feed</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.getScene(1)}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Channels</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.getScene(2)}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Community</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class extends Component{
  constructor(){
    super();
    this.state = {
      day: NewsFeedScreen,
    };
  }

  _getScene(index) {
    console.log("what")
    let scene;
    switch(index){
      case 0:
        scene = NewsFeedScreen;
        break;
      case 1:
        scene = Channels;
        break;
      case 2:
        scene = Community;
        break;
    }
    this.setState({
      scene,
    });
  }

  render() {
    return(
      <View>
        <Menu getScene={(index) => this._getScene(index)}/>
        <Main scene={this.state.scene}/>
      </View>
    )
  }
}

class Main extends Component{
  _previousLeft = 0;
  _maxLeft = 150;
  _mainStyles = {};
  main = (null : ?{ setNativeProps(props: Object): void });
  _CustomLayoutLinear = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.left,
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
    },
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // return gestureState.dy/gestureState.dx!=0;
        return true
      },
      onPanResponderGrant: (evt, gestureState) => {
        console.log("1")
      },
      onPanResponderMove: (evt, gestureState) => {
        this._mainStyles.style.left = this._previousLeft + gestureState.dx;
        if (this._mainStyles.style.left > this._maxLeft) {
          this._mainStyles.style.left = this._maxLeft;
        };
        if (this._mainStyles.style.left < 0) {
          this._mainStyles.style.left = 0;
        };
        this._updatePosition();
        LayoutAnimation.configureNext(this._CustomLayoutLinear);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
      onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
      onShouldBlockNativeResponder: (event, gestureState) => true,
    });

    this._mainStyles = {
      style: {
        left: this._previousLeft,
      },
    };
  }

  _updatePosition() {
    this.main && this.main.setNativeProps(this._mainStyles);
  }

  _endMove(evt,gestureState) {
    if (this._mainStyles.style.left > this._maxLeft/2) {
      this._mainStyles.style.left = this._maxLeft;
    };
    if (this._mainStyles.style.left <= this._maxLeft/2) {
      this._mainStyles.style.left = 0;
    };
    this._updatePosition();
    LayoutAnimation.configureNext(this._CustomLayoutLinear);
  }

  componentWillReceiveProps() {
    this.main.setNativeProps({style:{left:0}});
    this._previousLeft = 0;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  render() {
    const Scene = this.props.scene;
    return(
      <View ref={(main) => {this.main = main;}} {...this._panResponder.panHandlers} style={styles.main}>
        <Scene />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  menuContainer:{
      height: Util.size.height,
      width: Util.size.width,
      backgroundColor:"#893D54",
      justifyContent:"center",
    },
    menu:{
      height:50,
      justifyContent:"center",
      width:150,
      borderBottomColor:"#fff",
      borderBottomWidth: Util.pixel,
    },
    menuText:{
      color:"#fff",
      textAlign:"center",
      fontSize:18,
    },
    main:{
      width:Util.size.width,
      height: Util.size.height,
      position:"absolute",
      left:0,
      top:0,
      backgroundColor:"#fff",
    }
});

module.exports = Menu;
