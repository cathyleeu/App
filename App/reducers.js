import globalNav from './Components/GlobalNav/reducer';
import tabs from './Components/Tabs/reducer';
import feed from './Components/Feed/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	globalNav: globalNav,
	tabs,
	feed,
};
export default function createReducer() {
	return combineReducers(applicationReducers);
}
