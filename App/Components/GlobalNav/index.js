/*
 *
 * GlobalNavigation
 *
 */

import { View, NavigationExperimental } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Tabs from '../Tabs';
import Search from '../Search';
import Camera from '../Post/camera'
import { actions } from 'react-native-navigation-redux-helpers';

const {
  popRoute
} = actions;

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

class GlobalNav extends Component {
	constructor(props) {
		super(props);

		this._renderOverlay = this._renderOverlay.bind(this);
		this._renderScene = this._renderScene.bind(this);
	}

	render() {
		return (
      <NavigationCardStack
        onNavigate={ () => {} }
        style={styles.main}
        navigationState={this.props.navigation}
        renderOverlay={this._renderOverlay}
        renderScene={this._renderScene}
      />
		);
	}
	_renderScene(props, route, key) {
    switch (props.scene.route.key) {
      case 'Tabs':
        return(
        <View style={{flex: 1}}>
					<Tabs />
				</View>
      )
      case 'search':
        return(
        <View style={{flex: 1}}>
          <Search onClose={this._onClosePad.bind(this)} />
        </View>
      )
      case 'camera':
        return(
        <View style={{flex: 1}}>
          <Camera onClose={this._onClosePad.bind(this)} />
        </View>
      )

    }
		// if (props.scene.route.key === 'Tabs') {
		// 	return (
		// 		<View style={{flex: 1}}>
		// 			<Tabs />
		// 		</View>
		// 	);
		// }

	}

	_renderOverlay(props) {
    return null;
  }

	_onClosePad() {
    const { dispatch, navigation } = this.props;
    dispatch(popRoute(navigation.key));
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		onNavigate() {
			console.log('@@ onNavigate', arguments);
		}
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('globalNav')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNav);
