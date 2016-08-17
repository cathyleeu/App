import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableHighlight, Image, Animated, ScrollView } from 'react-native';

class SearchFeed extends Component{
  render() {
    return(
      <ScrollView>
        <View style={styles.card}>
            <Text>SearchFeed</Text>
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
})

export default SearchFeed;
