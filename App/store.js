import { createStore, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';
import devTools from 'remote-redux-devtools';

function configureStore(initialState = fromJS({ })) {
	const createStoreWithMiddleware = compose(devTools())(createStore);
	return createStoreWithMiddleware(createReducer(), initialState);
}

module.exports = configureStore;

// const url= '191.198.422.101:9000'
//
// getMoviesFromApiAsync() {
// 	return fetch(url)
// 		.then((response) => response.json())
// 		.then((responseJson) => {
// 			return responseJson.movies;
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// }
