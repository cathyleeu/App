/*
 *
 * App
 *
 */

import { View, NavigationExperimental } from 'react-native';
import React, { Component, PropTypes } from 'react';
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
