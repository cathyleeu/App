import { cardStackReducer } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
	key: 'feed',
	index: 0,
	routes: [
		{ key: 'feeds', name:'ios-chatbubbles', title: '뉴스피드' },
		// { key: 'intro', title: '인액터스 소개' },
		// { key: 'network', title: '네트워크' },
		// { key: 'message', title: '메세지함' },
		// { key: 'unknown', title: '대나무 숲' },
		// { key: 'archive', title: '아카이브' },
		// { key: 'contact', title: '문의' },
		// { key: 'config', title: '설정' },
	],
};

module.exports = cardStackReducer(initialState);
