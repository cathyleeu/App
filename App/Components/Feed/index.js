/*
*
* Feed
*
*/

import { View, Platform, NavigationExperimental,
	TouchableHighlight, Image, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Feeds from '../Feeds';
import MenuPanel from '../MenuPanel'
import Network from '../Network';
import Comments from '../Comments';
import Notification from '../Notification';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';
const { jumpTo, pushRoute, popRoute } = navigationActions;

const {
	Header: NavigationHeader,
	CardStack: NavigationCardStack
} = NavigationExperimental;
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');


class Feed extends Component {
	static contextTypes = {
    drawer: React.PropTypes.object.isRequired,
  }

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
			(Platform.OS === 'ios' || props.scene.route.key === 'comments')

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
			<NavigationHeader.Title >
				<Text style={{color: 'white'}}>{props.scene.route.title}</Text>
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
		if (props.scene.route.key === 'feeds') {
			return (
				<TouchableHighlight
					style={styles.buttonContainer}
					onPress={this.context.drawer.open}>
					<Icon style={styles.button} name="ios-menu" size={23} color="white" />
				</TouchableHighlight>
			);
		}
		return null;
	}

	_renderRightComponent(props) {
		if (props.scene.route.key === 'feeds') {
			return (
				<View style={{flexDirection:"row"}}>
					<TouchableHighlight
						style={styles.buttonContainer}
						onPress={this._onNotification.bind(this)}>
						<Icon style={styles.button} name="ios-notifications" size={23} color="white" />
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.buttonContainer}
						onPress={this._onSearch.bind(this)}>
						<Icon style={styles.button} name="ios-search" size={23} color="white" />
					</TouchableHighlight>
				</View>
			);
		}

		return null;
	}

	_renderScene(props) {
		if (props.scene.route.key === 'feeds') {
			const marginTop = Platform.OS === 'ios' ? NavigationHeader.HEIGHT : 0;
			return (
				<View style={{ marginTop }}>
					<Feeds onSelectComment={this._onSelectComment.bind(this)} />
				</View>
			);
		}

		if (props.scene.route.key === 'comments') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Comments />
				</View>
			);
		}
		if (props.scene.route.key === 'notification') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Notification />
				</View>
			);
		}
		if (props.scene.route.key === 'network') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Network />
				</View>
			);
		}
	}

	_onNotification() {
		const { dispatch, navigation } = this.props;

		dispatch(pushRoute({
			key: 'notification',
			title: '알림',
			showBackButton: true
		}, navigation.key));
	}
	_onSearch() {
		const { dispatch } = this.props;

		dispatch(pushRoute({
			key: 'search',
			title: 'search',
			showBackButton: true
		}, 'global'));
	}

	_onSelectComment() {
		const { dispatch, navigation } = this.props;

		dispatch(pushRoute({
			key: 'comments',
			title: 'Comments',
			showBackButton: true,
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
