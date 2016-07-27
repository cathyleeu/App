/*
 *
 * App
 *
 */

import { View } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import GlobalNav from '../GlobalNav';

class App extends Component {
	render() {
		return (
			<View style={styles.appContainer}>
				<GlobalNav />
			</View>
		);
	}
}

export default App;
