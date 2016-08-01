/*
 *
 * App
 *
 */

import { View, NavigationExperimental } from 'react-native';
import React, { Component, PropTypes } from 'react';
import styles from './styles';
import GlobalNav from '../GlobalNav';
import Drawer from 'react-native-drawer'
import Menu from '../Menu';

class App extends Component {
	state={
    drawerOpen: false,
    drawerDisabled: false,
  };
	closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

	render() {
		return (
			<Drawer
				ref={(ref) => this._drawer = ref}
				type="overlay"
				content={
					<Menu
						closeDrawer={this.closeDrawer}
					 />
				}
				styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
				onOpen={() => {
					console.log('onopen')
					this.setState({drawerOpen: true})
				}}
				onClose={() => {
					console.log('onclose')
					this.setState({drawerOpen: false})
				}}
				tweenDuration={100}
				panThreshold={0.08}
				disabled={this.state.drawerDisabled}
				openDrawerOffset={0.2}
				panOpenMask={0.2}
				negotiatePan
        >
				<View style={styles.appContainer}>
					<GlobalNav />
				</View>
      </Drawer>
		);
	}
}

export default App;
