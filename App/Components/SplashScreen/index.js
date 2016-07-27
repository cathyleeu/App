import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'

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
      (<View style={styles.container}>
          <Image style={styles.logo} source={this.props.logo} resizeMode='contain' />
        </View>)
    );
  }
}

export default SplashScreen
