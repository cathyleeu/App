import { cardStackReducer } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
	key: 'feed',
	index: 0,
	routes: [
		{ key: 'feeds', name:'ios-chatbubbles', title: '뉴스피드' },
	],
};

module.exports = cardStackReducer(initialState);
