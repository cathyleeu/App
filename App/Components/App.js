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

const NavigatorMapper = {
	LeftButton(route, navigator, index){
		if(index == 0 || route.name =='Profile'){
			return null
		}
		return(
			<TouchableHighlight onPress={() => {
				if(index > 0){
					navigator.pop();
				}
			}}>
				<Text style={{marginTop:10, marginLeft:20, color:'#FFFFFF'}}>뒤로</Text>
			</TouchableHighlight>
		)
	},
	RightButton(route, navigator, index){
		return null
	},
	Title(route, navigator, index){
		if(route.name =='Profile'){
			return null
		}
		return(
			<Text style={{marginTop: 7, color:'#FFFFFF'}}>{route.name}</Text>
		);
	}
}


class App extends Component{
	renderScene(route,navigator){
		switch (route.name) {
			case 'Enactus': //네비게이션 이름 설정
				return(
					<Tabs {...route.props} navigator={navigator} route={route} />
				)
		}
	}
	// initialRoute={{name: 'Enactus'}} Tabs.js의 initialRoute와 동일해야함
  render(){
    return(
      <SplashScreen logo={require('../Assets/logo.png')} duration={2000} backgroundColor={styles.splash}>
				<Navigator
					style={{backgroundColor:'#fff'}}
					initialRoute={{name: 'Enactus'}} 
					renderScene={this.renderScene}
					configureScene={(route) => {
						if(route.sceneConfig){
							return route.sceneConfig;
						}
						return Navigator.SceneConfigs.FloatFromRight;
					}}
					navigationBar={
						<Navigator.NavigationBar
							routeMapper={NavigatorMapper}
							style={{backgroundColor: '#5e5e5e', height: 50}} />
					} />
      </SplashScreen>
    );
  }
}

const styles = StyleSheet.create({
	splash: {
		backgroundColor:'#5E5E5E'
	}
});

export default App;
