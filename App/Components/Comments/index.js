
import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';


class Comments extends Component {
	constructor(props){
		super(props);
		// Feed.js 에서 보낸 property 데이터를 setState 해줍니다.
		this.state = {
			comment: props.passProps,
			text: ''
		}
	}
	render() {
		return (
			<View style={{flex: 1}}>
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
					<View style={{height:100}}>
						<Text>댓글 올라가는 공간</Text>
					</View>
				</View>
				<View style={styles.cmtContainer}>
					<View style={styles.textContainer}>
						<TextInput
							style={styles.input}
							value={this.state.text}
							onChangeText={(text) => this.setState({text: text})}
							/>
					</View>
					<View style={styles.sendContainer}>
						<TouchableHighlight>
							<Text style={styles.sendLabel}>SEND</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}


export default Comments;
