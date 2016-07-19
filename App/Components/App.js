import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import SplashScreen from './SplashScreen/Splash'
import Tabs from './Tabs'
import Post from './Post'


class App extends Component{
  render(){
    return(
      <SplashScreen logo={require('../Assets/logo.png')} duration={2000} backgroundColor={styles.splash}>
        <Tabs />
      </SplashScreen>
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
	splash: {
		backgroundColor:'#5E5E5E'
	}
});

export default App;
