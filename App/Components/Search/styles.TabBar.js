import { StyleSheet } from 'react-native';
import Util from '../utils'

export default StyleSheet.create({
  tab: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,

  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  icon: {
    position: 'absolute',
    left:35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
