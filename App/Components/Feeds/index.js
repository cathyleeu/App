/*
 *
 * Items
 *
 */

'use strict';

import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Util from '../utils'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'

const userTestImage = require('../../Assets/user.png')

const data = [
	{
		key: '1',
		userName: '이고은',
		userUniv: '인액터스 대학교',
		commentTime: '7/26 1:30pm',
		description: '인액터스 테스트 입니다.인액터스 테스트 입니다.인액터스 테스트 입니다.인액터스 테스트 입니다.인액터스 테스트 입니다.인액터스 테스트 입니다.인액터스 테스트 입니다.인액터스 테스트 입니다. ',
	},
	{
		key: '2',
		userName: '이유경',
		userUniv: '명지 대학교',
		commentTime: '7/25 1:10pm',
		description: '인액터스 테스트 입니다. 2',
	},
	{
		key: '3',
		userName: '박웅',
		userUniv: '카이스트',
		commentTime: '7/25 9:10am',
		description: '인액터스 테스트 입니다.3 ',
	},
	{
		key: '4',
		userName: '이유경',
		userUniv: '명지 대학교',
		commentTime: '7/25 8:10am',
		description: '인액터스 테스트 입니다.  4',
	},
	{
		key: '5',
		userName: '이유경',
		userUniv: '명지 대학교',
		commentTime: '7/24 1:10pm',
		description: '인액터스 테스트 입니다. ',
	},
	{
		key: '6',
		userName: '이유경',
		userUniv: '명지 대학교',
		commentTime: '7/23 1:10pm',
		description: 'Description 6',
	},
	{
		key: '7',
		userName: '이유경',
		userUniv: '명지 대학교',
		commentTime: '7/22 10:10pm',
		description: 'Description 7',
	}
].map(d => Object.assign(d, {
	image: require('../../Assets/user.png')
}));

class Feeds extends Component {
	renderSlide(){
		return(
			<Swiper style={styles.default} height={200} autoplay={true}>
				<View style={styles.slide1}>
					<Image style={styles.image} source={require('../../Assets/Slide.jpg')}/>
				</View>
				<View style={styles.slide2}>
					<Text style={styles.slideText}> Test 02 </Text>
				</View>
				<View style={styles.slide3}>
					<Text style={styles.slideText}> Test 03 </Text>
				</View>
			</Swiper>
		)
	}
	render() {
		const generateItem = (i) => (
			<View style={styles.feedsListView} key={i.key}>
				<View style={styles.feedContainer}>
					<View style={styles.feedTopContainer}>
						<Image
							source={i.image}
							style={styles.userImage}
							/>
						<View style={styles.feedInfoContainer}>
							<Text style={styles.feedUser}>{i.userName}</Text>
							<Text style={styles.feedUserUniv}>{i.userUniv}</Text>
						</View>
						<Text style={styles.feedUserTime}>{i.commentTime}</Text>
					</View>
					<View style={styles.ctxContainer}>
							<Text style={styles.txtContents}>{i.description}</Text>
					</View>
					<View style={styles.likeAndcomment}>
						<View style={styles.funcIcon}>
							<Icon name="ios-heart-outline" size={23} color="#8899a5" />
							<Text> 20개 </Text>
								<TouchableHighlight onPress={this.props.onSelectItem}>
								<Icon name="ios-chatboxes-outline" size={23} color="#8899a5" />
								</TouchableHighlight>
								<Text> 5개 </Text>
						</View>
						<View style={styles.funcShare}>
							<Icon name="ios-share-outline" size={23} color="#8899a5" />
						</View>
					</View>

				</View>
			</View>
		);
		return (
			<ScrollView automaticallyAdjustContentInsets={false}>
				{this.renderSlide()}
				{data.map(generateItem)}
			</ScrollView>
		);
	}
}

Feeds.propTypes = {
	onSelectItem: React.PropTypes.func.isRequired
};

export default Feeds;
