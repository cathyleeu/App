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
        dataSource: this.state.dataSource.cloneWithRows(responseData.feed),
        loaded: true
      })
    })
		console.log("fectching" + REQUEST_URL)
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
        <Text style={{marginTop:100}}> 포스팅 로딩중</Text>
      </View>
    )
  }
	renderFeeds(feeds){
		return(
			<View style={styles.feedsListView} >
				<View style={styles.feedContainer}>
					<View style={styles.feedTopContainer}>
						<Image
								source={require('../../Assets/user.png')}
								style={styles.userImage}
								/>
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
			<ScrollView>
				{this.renderSlide()}
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderFeeds.bind(this)}
					/>
			</ScrollView>
		);
	}
}

Feeds.propTypes = {
	onSelectComment: React.PropTypes.func.isRequired
};

export default Feeds;
