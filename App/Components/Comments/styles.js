import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	feedContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: 40,
    borderRadius: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#5e5e5e',
  },
  feedTopContainer: {
    margin:10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
	userImage: {
	width: 50,
	height: 50,
	borderRadius: 25
},
feedInfoContainer: {
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',
	backgroundColor: 'transparent',
	flex: 1,
	marginHorizontal: 15,
},
ctxContainer:{
	margin:10,
	backgroundColor: 'transparent',
	flex: 1,
	flexDirection: 'column',
},
feedUser: {
	fontFamily: 'Avenir',
	fontSize: 15,
	flexWrap: 'wrap',
	fontWeight: '800'
},
feedUserUniv: {
	fontFamily: 'Avenir',
	fontSize: 11,
},
feedUserTime: {
	fontFamily: 'Avenir',
	fontSize: 11,
	marginTop: 8
},
ctxContainer:{
	margin:10,
	backgroundColor: 'transparent',
	flex: 1,
	flexDirection: 'column',
},
txtContents:{
	marginBottom: 10,
	paddingBottom: 3,
},
});
