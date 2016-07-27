import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
	key: 'feed',
	index: 0,
	routes: [
		{
			key: 'list',
			title: 'Enactus'
		},
	],
};

module.exports = cardStackReducer(initialState);
