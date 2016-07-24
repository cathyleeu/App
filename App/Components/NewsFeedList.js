'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ListView,
  ScrollView,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons';

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
            <View style={styles.feedInfoContainer}>
              <Text style={styles.feedUser}>이고은</Text>
              <Text style={styles.feedUserUniv}>인액터스 대학교</Text>
            </View>
            <Text style={styles.feedUserTime}>7/22 2:28pm</Text>
          </View>
          <View style={styles.ctxContainer}>
              <Text style={styles.txtContents}>엄훠 인액터스 앱이 생기다니!</Text>
          </View>
          <View style={styles.likeAndcomment}>
            <View style={styles.funcIcon}>
              <Icon name="ios-heart-outline" size={23} color="#8899a5" />
              <Text> 20개 </Text>
              <Icon name="ios-chatboxes-outline" size={23} color="#8899a5" />
              <Text> 5개 </Text>
            </View>
            <View style={styles.funcShare}>
              <Icon name="ios-share-outline" size={23} color="#8899a5" />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderFeed2() {
    return (
      <View style={styles.feedsListView}>
        <View style={styles.feedContainer}>
          <View style={styles.feedTopContainer}>
            <Image
              source={require('../Assets/user.png')}
              style={styles.userImage}
              />
            <View style={styles.feedInfoContainer}>
              <Text style={styles.feedUser}>이고은</Text>
              <Text style={styles.feedUserUniv}>인액터스 대학교</Text>
            </View>
            <Text style={styles.feedUserTime}>7/22 2:28pm</Text>
          </View>
          <View style={styles.ctxContainer}>
              <Text style={styles.txtContents}>엄훠 인액터스 앱이 생기다니!</Text>
              <Image style={styles.imageContents} source={require('../Assets/user.png')}/>
          </View>
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
      <ScrollView style={styles.rootContainer}>
        {this.renderSlide()}
        {this.renderFeed()}
        {this.renderFeed2()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
   flex: 1,
   flexDirection: 'column',

  },
  feedContainer: {
    borderWidth: 3,
    borderColor: '#f2f2f2',
    backgroundColor: 'transparent',
    marginHorizontal: 40,
    borderRadius: 5
  },
  feedTopContainer: {
    margin:10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  feedInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
    marginHorizontal: 15,
  },
  ctxContainer:{
    margin:10,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  },
  feedUserContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: -4
  },
  feedUser: {
    fontFamily: 'Avenir',
    fontSize: 15,
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
    marginTop: 8
  },
  txtContents:{
    marginBottom: 10,
    paddingBottom: 3,
  },
  imageContents:{
    backgroundColor: 'transparent',
    width:200,
    height:200,
    alignSelf: 'center',
  },
  feedsListView: {
    paddingTop: 20
  },
  likeAndcomment: {
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    borderTopWidth:1,
    borderTopColor:"#f2f2f2",
    paddingVertical: 10,
    marginHorizontal: 10
  },
  funcIcon:{
    marginLeft: 10,
    width:120,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  funcShare:{
    width:50,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
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
