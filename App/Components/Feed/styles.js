import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	navHeader: {
		backgroundColor: '#5e5e5e',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		height: 24,
		width: 24,
		margin: Platform.OS === 'ios' ? 10 : 16,
		resizeMode: 'contain'
	}
});
