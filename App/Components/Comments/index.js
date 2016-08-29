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
		super(props)
		// this.passProps = this.props.route.passProps
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
						<Text style={styles.feedUser}>이고은</Text>
						<Text style={styles.feedUserUniv}>인액 대학교</Text>
					</View>
					<Text style={styles.feedUserTime}>8월29일</Text>
				</View>
				<View style={styles.ctxContainer}>
						<Text style={styles.txtContents}>연결을 기다림</Text>
				</View>
			</View>
		);
	}
}


export default Comments;
