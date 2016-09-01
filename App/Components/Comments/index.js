/*
 *
 * ItemDetails
 *
 */

import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';


class Comments extends Component {
	constructor(props){
		super(props);
		// Feed.js 에서 보낸 property 데이터를 setState 해줍니다.
		this.state = {
			comment: props.passProps
		}
	}
	render() {
		return (
			<View style={styles.feedContainer}>
				<View style={styles.feedTopContainer}>
					<Image
						source={require('../../Assets/user.png')}
						style={styles.userImage}
						/>
					<View style={styles.feedInfoContainer}>
						<Text style={styles.feedUser}>{this.state.comment.username}</Text>
						<Text style={styles.feedUserUniv}>{this.state.comment.useruniv}</Text>
					</View>
					<Text style={styles.feedUserTime}>{this.state.comment.posted}</Text>
				</View>
				<View style={styles.ctxContainer}>
						<Text style={styles.txtContents}>{this.state.comment.content}</Text>
				</View>
			</View>
		);
	}
}


export default Comments;
