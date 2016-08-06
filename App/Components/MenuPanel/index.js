'use strict';
import React, { Component,  PropTypes } from 'react';
import { ScrollView, Text, Image, TouchableOpacity,TouchableHighlight, View, NavigationExperimental} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
const { jumpTo, pushRoute } = navigationActions;


class MenuPanel extends Component {
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
                const { dispatch } = this.props;
                dispatch(pushRoute({
                  key: panel.key,
                  title: panel.title,
                  showBackButton: true
                }, 'feed'))}}
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
    console.log(navigation.key)
  }
  onNavigate(action) {
    console.log("its working")
    closeDrawer
    const { dispatch } = this.props;
    dispatch(pushRoute({
      key: panel.key,
      title: panel.title,
      showBackButton: true
    }, 'feed'));
    // this.props.dispatch(action);
    // const { dispatch } = this.props;
    // dispatch(pushRoute({
    //   key: panel.key,
    //   title: panel.title,
    //   showBackButton: true
    // }, 'feed'));
    // console.log(navigation.key)
    // console.log(panel.key)
  };
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
