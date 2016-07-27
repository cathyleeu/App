import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class SplashScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    }
  }
  timer(){
    setTimeout(()=> {
      this.setState({
        done: true
      });
    },this.props.duration || 1000)
  }
  componentDidMount(){
    this.timer();
  }
  render(){
    return(
      this.state.done ?
      // if done -> show all nested
      ({...this.props.children})
      :
      // display splash screen
      (<View style={[styles.container, this.props.backgroundColor]}>
          <Image style={styles.logo} source={this.props.logo} resizeMode='contain' />
        </View>)
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection:'column',
		flex: 1,
    justifyContent: 'center',
	},
	logo: {
		flex:1,
		width:120,
    justifyContent: 'center',
    left: 130

	}
});

export default SplashScreen
