import { tabReducer } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const tabs = {
  routes: [
    { key: 'post', iconName: 'ios-create-outline', selectedIconName: 'ios-create' , title: 'Post' },
		{ key: 'feed', iconName: 'ios-paper-outline', selectedIconName: 'ios-paper', title: 'Feed' },
    { key: 'profile', iconName: 'ios-contact-outline', selectedIconName: 'ios-contact', title: 'Profile' }
  ],
  key: 'Tabs',
  index: 1 // index number to initialScreen
};

module.exports = tabReducer(tabs);
