import { StyleSheet, Platform } from 'react-native';
import Util from '../utils'

export default StyleSheet.create({
	sideMenuContainer:{
		flex: 1,
		backgroundColor:"#fff",
	},
	close: {
		justifyContent: "center",
		alignItems: "center"
	},
	imageCon: {
		width: 0.7*Util.size.width/1.754,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 60
	},
	logoimage:{
		width:65,
		height:30
	},
});

// navHeader: {
// 	backgroundColor: '#5e5e5e',
// },
// buttonContainer: {
// 	flex: 1,
// 	flexDirection: 'row',
// 	alignItems: 'center',
// 	justifyContent: 'center',
// },
// button: {
// 	height: 24,
// 	width: 24,
// 	margin: Platform.OS === 'ios' ? 10 : 16,
// }
