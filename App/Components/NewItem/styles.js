import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex:1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	button: {
		borderWidth: 2,
		borderColor: 'black',
		height: 24,
		width: 24
	}
});
