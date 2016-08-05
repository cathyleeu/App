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
    const onNavigate = (action) => {
      closeDrawer
      this.props.dispatch(action);
    };
    const { navigation } = this.props;

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

        {this.props.navigation.routes.map( (t, i) => {
          return (
            <TouchableHighlight underlayColor="#888"
              onPress={ () => onNavigate(jumpTo(i, navigation.key)) }
              key={ t.key }>
              <View style={styles.btn}>
                <Icon style={styles.btnIcon} name={t.name} size={20}></Icon>
                <Text style={styles.btnText}>{ t.title }</Text>
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
