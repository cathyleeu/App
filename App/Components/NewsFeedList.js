'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ListView,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'

class NewsFeedList extends Component {
  renderSlide(){
    return(
      <Swiper style={styles.default} height={200} autoplay={true}>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require('../Assets/Slide.jpg')}/>
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
  renderFeed() {
    return (
      <View style={styles.feedsListView}>
        <View style={styles.feedContainer}>
          <View style={styles.feedTopContainer}>
            <Image
              source={require('../Assets/user.png')}
              style={styles.userImage}
              />
            <View style={styles.feedTextContainer}>
              <View>
                <Text style={styles.feedUser}>이고은</Text>
                <Text style={styles.feedUserTime}>7/22 2:28pm</Text>
              </View>
              <Text style={styles.feedUserUniv}>인액터스 대학교</Text>
            </View>
          </View>
          <View style={styles.ctxContainer}><Text>엄훠 인액터스 앱이 생기다니!</Text></View>
        </View>
      </View>
    );
  }
  // renderFeedMedia(){
  //   if (tweet.entities.media && tweet.entities.media.length > 0)
  //     {
  //       return (
  //         <View style={styles.tweetMediaContainer}>
  //           <Image source={{uri: tweet.entities.media[0].media_url}}
  //                  style={[{width: 500, height: 300},
  //                         {resizeMode: Image.resizeMode.contain}]} />
  //         </View>
  //       )
  //     }
  // }
  // renderFeeds(){
  //   return(
  //     <ListView
  //       style={styles.feedsListView}
  //       dataSource={}
  //       renderRow={this.renderFeed}
  //       automaticallyAdjustContentInsets={false}
  //       contentInset={{botton: 30}}/>
  //   )
  // }
  render(){
    return(
      <View style={styles.rootContainer}>
        {this.renderSlide()}
        {this.renderFeed()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
   flex: 1,
   flexDirection: 'column'
  },
  feedContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingVertical: 0,
    marginTop: 0,
    marginBottom: 10
  },
  feedTopContainer: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    marginTop: 0,
    height: 50
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10
  },
  feedTextContainer: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 15,
  },
  ctxContainer:{
    marginTop:10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 15,
    marginBottom: 10
  },
  feedUserContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: -4
  },
  feedUser: {
    fontFamily: 'Avenir',
    fontSize: 11,
    flexWrap: 'wrap',
    fontWeight: '800'
  },
  feedUserUniv: {
    fontFamily: 'Avenir',
    fontSize: 11,
  },
  feedUserTime: {
    fontFamily: 'Avenir',
    fontSize: 11,
    marginLeft: 80
  },
  feedText:{
    marginTop: 10,
    fontFamily: 'Avenir',
    fontSize: 14,
  },
  feedsListView: {
    paddingTop: 16,
  },
  feedMediaContainer: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginHorizontal: 50,
    marginBottom: 20
  },
  slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },

    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },

    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    image: {
      marginTop: 30,
      flex: 1,
      width: 400,
      height: 130
    },
    slideText: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
});

module.exports = NewsFeedList;
