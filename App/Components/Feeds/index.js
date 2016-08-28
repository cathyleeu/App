/*
 *
 * Items
 *
 */

'use strict';

import { View, Text, TouchableHighlight, Image, ScrollView, ListView } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Util from '../utils'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'

// const userTestImage = require('../../Assets/user.png')

// const data = [
// 	{
// 		key: '1',
// 		userName: '익명',
// 		userUniv: '익명 대학교',
// 		commentTime: '7/26 1:30pm',
// 		description: '인액터스 테스트 입니다. ',
// 	},
// 	{
// 		key: '2',
// 		userName: '이유경',
// 		userUniv: '명지 대학교',
// 		commentTime: '7/25 1:10pm',
// 		description: '인액터스 테스트 입니다. 2',
// 	},
//
// ].map(d => Object.assign(d, {
// 	image: require('../../Assets/user.png')
// }));

const REQUEST_URL = "http://localhost:9000/feed"

class Feeds extends Component {
	constructor(props){
		super(props)
		this.state = {
			dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
          // 데이터 소스를 가지고 와서 리스트로 뿌려 주는 것임!
        }),
      loaded: false
		}
	}
	componentDidMount(){
		this.fetchData();
	}
	fetchData(){
		fetch(REQUEST_URL)
		.then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
        loaded: true
      })
    })
	}
	renderSlide(){
		return(
			<Swiper style={styles.default} height={200} autoplay={false}>
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
	renderLoadingView(){
    return(
      <View style={styles.container}>
				{this.renderSlide()}
        <Text style={{marginTop:100}}> 아직 포스팅 된 글이 없습니다.</Text>
      </View>
    )
  }
	renderFeeds(feeds){
		return(
			<View style={styles.feedsListView} key={feeds._id}>
				<View style={styles.feedContainer}>
					<View style={styles.feedTopContainer}>

						<View style={styles.feedInfoContainer}>
							<Text style={styles.feedUser}>{feeds.username}</Text>
							<Text style={styles.feedUserUniv}>{feeds.useruniv}</Text>
						</View>
						<Text style={styles.feedUserTime}>{feeds.posted}</Text>
					</View>
					<View style={styles.ctxContainer}>
							<Text style={styles.txtContents}>{feeds.content}</Text>
					</View>
					<View style={styles.likeAndcomment}>
						<View style={styles.funcIcon}>
							<Icon name="ios-heart-outline" size={23} color="#8899a5" />
							<Text> 20개 </Text>
								<TouchableHighlight onPress={this.props.onSelectComment}>
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
		)
	}
	render() {
		if(!this.state.loaded){
			return this.renderLoadingView()
		}
		return (
			<View>
				{this.renderSlide()}
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderFeeds.bind(this)}
					/>
			</View>
		);
	}
}

Feeds.propTypes = {
	onSelectComment: React.PropTypes.func.isRequired
};

export default Feeds;
