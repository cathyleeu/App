/*
*
* Feed
*
*/

import { View, Platform, NavigationExperimental,
	TouchableHighlight, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Feeds from '../Feeds';
import Comments from '../Comments';
import { actions } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const {
  popRoute,
  pushRoute
} = actions;

const {
	Header: NavigationHeader,
	CardStack: NavigationCardStack
} = NavigationExperimental;
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');

class Feed extends Component {
	render() {
		return (
			<NavigationCardStack
				onNavigate={ () => {} }
				direction={'horizontal'}
				navigationState={this.props.navigation}
				renderScene={this._renderScene.bind(this)}
				renderOverlay={this._renderHeader.bind(this)}
				style={styles.main}
			/>
		);
	}

	_renderHeader(props) {
		const showHeader = props.scene.route.title &&
			(Platform.OS === 'ios' || props.scene.route.key === 'details');

		if (showHeader) {
			return (
				<NavigationHeader
				{...props}
				style={styles.navHeader}
				renderTitleComponent={this._renderTitleComponent.bind(this)}
				renderLeftComponent={this._renderLeftComponent.bind(this)}
				renderRightComponent={this._renderRightComponent.bind(this)}
				/>
			);
		}

		return null;
	}

	_renderTitleComponent(props) {
		return (
			<NavigationHeader.Title>
				{props.scene.route.title}
			</NavigationHeader.Title>
		);
	}

	_renderLeftComponent(props) {
		const { dispatch, navigation } = this.props;

		if (props.scene.route.showBackButton) {
			return (
				<NavigationHeaderBackButton onPress={() => dispatch(popRoute(navigation.key))} />
			);
		}

		return null;
	}

	_renderRightComponent(props) {
		if (props.scene.route.key === 'list') {
			return (
				<TouchableHighlight
					style={styles.buttonContainer}
					onPress={this._onAddItem.bind(this)}>
					<Icon style={styles.button} name="ios-create" size={23} color="white" />
				</TouchableHighlight>
			);
		}

		return null;
	}

	_renderScene(props) {
		if (props.scene.route.key === 'list') {
			const marginTop = Platform.OS === 'ios' ? NavigationHeader.HEIGHT : 0;
			return (
				<View style={{ marginTop }}>
					<Feeds onSelectItem={this._onSelectItem.bind(this)} />
				</View>
			);
		}

		if (props.scene.route.key === 'details') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Comments />
				</View>
			);
		}
	}

	_onAddItem() {
		const { dispatch } = this.props;

		dispatch(pushRoute({
			key: 'new',
			title: 'Main Screen',
			showBackButton: true
		}, 'global'));
	}

	_onSelectItem() {
		const { dispatch, navigation } = this.props;

		dispatch(pushRoute({
			key: 'details',
			title: 'Comments',
			showBackButton: true
		}, navigation.key));
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('feed')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
