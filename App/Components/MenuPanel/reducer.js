import { tabReducer } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const panel = {
  routes: [
    { key: 'news', name:'md-paper', title: '뉴스피드' },
	  { key: 'intro', name:"md-share", title: '인액터스 소개' },
		{ key: 'network', name:'md-git-network',  title: '네트워크' },
		{ key: 'message', name:'ios-chatbubbles', title: '메세지함' },
		{ key: 'unknown', name:'md-volume-down', title: '대나무 숲' },
		{ key: 'archive', name:'md-cloud-download',  title: '아카이브' },
		{ key: 'contact', name:'ios-mail-outline',  title: '문의' },
		{ key: 'config', name:'ios-construct', title: '설정' },
    ],
  key: 'Panel',
  index: 0
};

module.exports = tabReducer(panel);
