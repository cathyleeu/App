import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
	key: 'menu',
	index: 0,
	routes: [
		{ key: 'news', index: 0, name:'ios-chatbubbles', title:'Enactus' },
    { key: 'intro', index: 1,name:'md-share', title:'Enactus소개'},
    { key: 'network', index: 2, name:'md-git-network', title:'네트워크'},
    { key: 'unknown', index: 3 , name:'md-volume-down', title:'대나무숲'},
    { key: 'archive', index: 4 , name:'md-cloud-download', title:'아카이브'},
    { key: 'member', index: 5 ,name:'ios-people', title:'멤버십 소개'},
    { key: 'message', index: 6 ,name:'ios-mail-outline', title:'1:1메세지'},
	],
};

module.exports = cardStackReducer(initialState);
