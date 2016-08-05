/*
 *
 * Notification
 *
 */
 'use strict';

 import React, { Component } from 'react';
 import { Image, TextInput, Text, View, TouchableHighlight, ScrollView } from 'react-native';
 import Icon from 'react-native-vector-icons/Ionicons';
 import styles from './styles'

class Notification extends Component {
			render() {
			return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            for Notification
          </Text>
        </View>
		);
	}
}


export default Notification;
