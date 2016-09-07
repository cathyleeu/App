import { View, Platform, NavigationExperimental,
	TouchableHighlight, Image, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Feeds from '../Feeds';
import MenuPanel from '../MenuPanel'
import Intro from '../Intro';
import Network from '../Network';
import Message from '../Message';
import Unknown from '../Unknown';
import Archive from '../Archive';
import Contact from '../Contact';
import Config from '../Config';
import Comments from '../Comments';
import Login from '../Register/login';
import Register from '../Register';
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
			<NavigationHeader.Title
			 	textStyle={{ color: 'white'}}>
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
		const menuShow = props.scene.route.title
		if (menuShow) {
			return (
				<TouchableHighlight
					style={styles.buttonContainer}
					onPress={this.context.drawer.open}>
					<Icon style={styles.menu} name="ios-menu" size={23} color="white" />
				</TouchableHighlight>
			);
		}
		return null;
	}

	_renderRightComponent(props) {
		const rightShow = props.scene.route.key === 'feeds' || props.scene.route.key === 'news'
		if (rightShow) {
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

	_renderScene(props, route, key) {
		if (props.scene.route.key === 'feeds' || props.scene.route.key === 'news') {
			const marginTop = Platform.OS === 'ios' ? NavigationHeader.HEIGHT : 0;
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Feeds onSelectComment={this._onSelectComment.bind(this)} />
				</View>
			);
		}
		if (props.scene.route.key === 'comments') {
			// 3 : passProps에 담아놓은 feed데이터를 Comment 창으로 보냅니다.
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT,
    marginBottom: 49}}>
					<Comments passProps={props.scene.route.passProps}/>
				</View>
			);
		}
		if (props.scene.route.key === 'register') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Register />
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
		if (props.scene.route.key === 'intro') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Intro />
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
		if (props.scene.route.key === 'message') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Message />
				</View>
			);
		}
		if (props.scene.route.key === 'unknown') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Unknown />
				</View>
			);
		}
		if (props.scene.route.key === 'archive') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Archive />
				</View>
			);
		}
		if (props.scene.route.key === 'contact') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Contact />
				</View>
			);
		}
		if (props.scene.route.key === 'config') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Config />
				</View>
			);
		}
		if (props.scene.route.key === 'login') {
			return (
				<View style={{ marginTop: NavigationHeader.HEIGHT }}>
					<Login onSelectRegister={this._onSelectRegister.bind(this)}
								 onSelectLogin={this._onSelectLogin.bind(this)} />
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

	_onSelectComment(feeds) {
		const { dispatch, navigation} = this.props;
		// 2 : Feeds.js에서 넘겨준 feed정보를 받아 props.scene.route.passProps 에 담아줍니다.
		dispatch(pushRoute({
			key: 'comments',
			title: 'Comments',
			passProps: feeds,
			showBackButton: true,
		}, navigation.key));
	}
	_onSelectRegister() {
		const { dispatch, navigation } = this.props;

		dispatch(pushRoute({
			key: 'register',
			title: '회원가입',
			showBackButton: true,
		}, navigation.key));
	}
	_onSelectLogin(){
		const { navigation } = this.props;
		// props.scene.route.key === 'feeds'
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
