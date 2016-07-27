/*
 *
 * ItemDetails
 *
 */

import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';


class Comments extends Component {
	render() {
		return (
			<View style={styles.feedContainer}>
				<View style={styles.feedTopContainer}>
					<Image
						source={require('../../Assets/user.png')}
						style={styles.userImage}
						/>
					<View style={styles.feedInfoContainer}>
						<Text style={styles.feedUser}>이고은</Text>
						<Text style={styles.feedUserUniv}>인액터스 대학교</Text>
					</View>
					<Text style={styles.feedUserTime}>7/22 2:28pm</Text>
				</View>
				<View style={styles.ctxContainer}>
						<Text style={styles.txtContents}>테스트 중입니다~~~ </Text>
				</View>
			</View>
		);
	}
}


export default Comments;
