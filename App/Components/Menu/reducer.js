import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
	key: 'menu',
	index: 0,
	routes: [
		{
			key: 'menupanel',
		},
	],
};

module.exports = cardStackReducer(initialState);
