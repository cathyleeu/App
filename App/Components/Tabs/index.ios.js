import { View, Text, TabBarIOS } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Feed from '../Feed';
import Post from '../Post';
import Profile from '../Profile';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const { jumpTo, pushRoute, popRoute } = navigationActions;

class Tabs extends Component {
	// 탭 key가 '##'라면 이 페이지를 넘겨라는 라우터 설정
	_renderTabContent(tab) {

		if (tab.key === 'post') {
			return (
				<Post onCamera={this._onCamera.bind(this)}/>
			);
		}

		if (tab.key === 'feed') {
			return (
				<Feed />
			);
		}

		if (tab.key === 'profile') {
			return (
				// <View style={[styles.tabContent, {backgroundColor: 'pink'}]} />
				<Profile />
			);
		}

		return <Text>Hello there</Text>;
	}
 // 탭 기능 설정
	render() {
		const { dispatch, navigation } = this.props;
		const children = navigation.routes.map( (tab, i) => {
			return (
				<Icon.TabBarItem key={tab.key}
						iconName={tab.iconName}
						selectedIconName={tab.selectedIconName}
						title={tab.title} onPress={ () => dispatch(jumpTo(i, navigation.key)) }
						selected={this.props.navigation.index === i}>
						{ this._renderTabContent(tab) }
				</Icon.TabBarItem>
			);
		});
		return (
			<TabBarIOS tintColor="#E8B11D">
				{children}
			</TabBarIOS>
		);
	}
	_onCamera() {
		const { dispatch } = this.props;

		dispatch(pushRoute({
			key: 'camera',
			title: 'camera',
			showBackButton: false
		}, 'global'));
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs')
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
