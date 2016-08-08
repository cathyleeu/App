'use strict';

import React, { Component } from 'react';
import {Text,View,TouchableHighlight,Image,ScrollView} from 'react-native';
import SearchBar from 'react-native-search-bar';
import fuzzy from 'fuzzy';
import styles from './styles';

class Network extends Component {
  constructor(){
    super()

    const stateData = {"연세대": "강동웅","한국외대": "김정대","연세대": "김정규","연세대": "이영인","숭실대": "이고은","건국대": "공성원","명지대": "이충훈","숭실대": "문지현","성균관대": "차지환","수원대": "김명보","세종대": "유이경","한국외대": "윤나리","이화여대": "김민수","동국대": "임승범","성균관대": "하효원","이화여대": "허정인","성균관대": "박민규","성균관대": "조원호"}
    this.states = [];
    for (let key in stateData) {
      if (stateData.hasOwnProperty(key)) {
        this.states.push(stateData[key]);
      }
    }

    this.state = {
      states: this.states,
    };
  }
  _onChangeText(text) {
     let results = fuzzy.filter(text, this.states)
     let matches = results.map(function(el) { return el.string; });
     this.setState({
       states: matches,
     })
   }

  render() {
    const statesList = this.state.states.map(function(elem, index) {
     return (
       <View key={index} style={styles.list}>
        <Image source={require('./assets/lion.jpeg')} style={styles.userImage}/>
        <View style={styles.userList}>
          <Text style={styles.text}>{elem}</Text>
        </View>
        <TouchableHighlight style={styles.activeBtn}  >
          <Text style={styles.activeBtnText}>메세지 보내기</Text>
        </TouchableHighlight>
       </View>
     )
   })

   return(
     <ScrollView style={styles.container} contentOffset={{y:50}}>
       <SearchBar
         ref='searchBar'
         placeholder='Search'
         onChangeText={(text)=> this._onChangeText(text)}
       />
       {statesList}
     </ScrollView>
   )
  }
}


// module.exports = Network;
export default Network;
