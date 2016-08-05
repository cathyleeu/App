import { View, Text, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';
import DrawerLayoutAndroid from 'DrawerLayoutAndroid';
import ToolbarAndroid from 'ToolbarAndroid';
import styles from './styles';
import Feed from '../Feed';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

const { jumpTo, pushRoute } = navigationActions;

class ApplicationTabs extends Component {
	_renderTabContent(tab) {
		if (tab.key === 'feed') {
			return (
				<Feed />
			);
		}

		if (tab.key === 'notifications') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'green'}]} />
			);
		}

		if (tab.key === 'settings') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'pink'}]} />
			);
		}
	}

	render() {
		const onNavigate = (action) => { //어떤 액션을 할 것인지 정의함
			this.drawer.closeDrawer(); //드로워를 닫고
			this.props.dispatch(action); //가고자 하는 페이지로 전달함
		};

		const { navigation } = this.props;

		const navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				{this.props.navigation.routes.map( (t, i) => { // object들 맵을 돌리지요~~ reducer의
					// 메뉴 리스트를 누르면 onNavigate에 정의한 액션이 실행된다.
					return (
						<TouchableHighlight
							onPress={ () => onNavigate(jumpTo(i, navigation.key)) }
							key={ t.key }>
							<Text>{ t.title }</Text>
						</TouchableHighlight>
					);
				})}
			</View>
		);

		return (
			<DrawerLayoutAndroid
				ref={(drawer) => { this.drawer = drawer; }}
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => navigationView}>
				{this._renderApp()}
			</DrawerLayoutAndroid>
		);
	}

	_renderApp() {
		const selectedTab = this.props.navigation.routes[this.props.navigation.index];
		const actions = [{
			title: 'New Item',
			icon: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
			show: 'always',
			showWithText: false
		}];
		return (
			<View style={{ flex: 1 }}>
				<ToolbarAndroid
					navIcon={require('./img/hamburger.png')}
					actions={actions}
					onIconClicked={() => this.drawer.openDrawer()}
					style={styles.toolbar}
					title={selectedTab.title}
					onActionSelected={this._onActionSelected.bind(this)}
				/>
				{this._renderTabContent(selectedTab)}
			</View>
		);
	}

	_onActionSelected(position) {
		const { dispatch } = this.props;
		if (position === 0) {
			dispatch(pushRoute({
				key: 'new',
				title: 'Main Screen',
				showBackButton: true
			}, 'global'));
		}
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
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
