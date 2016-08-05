import globalNav from './Components/GlobalNav/reducer';
import tabs from './Components/Tabs/reducer';
import feed from './Components/Feed/reducer';
import panel from './Components/MenuPanel/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	globalNav: globalNav,
	tabs,
	feed,
	panel,
};
export default function createReducer() {
	return combineReducers(applicationReducers);
}
