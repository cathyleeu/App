import { StyleSheet } from 'react-native';
import Util from '../utils'

export default StyleSheet.create({
	feedContainer: {
    backgroundColor: 'transparent',
    margin: 15,
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
cmtContainer:{
	flex: 1,
	bottom:50,
	left:0,
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	backgroundColor: '#5e5e5e'
},
textContainer:{
	flex: 1,
  justifyContent: 'center'
},
sendContainer:{
	justifyContent: 'flex-end',
  paddingRight: 10
},
input: {
	width: Util.size.width -70,
  color: '#555555',
  paddingRight: 10,
  paddingLeft: 10,
  paddingTop: 5,
  height: 32,
  borderColor: '#5e5e5e',
  borderWidth: 1,
  borderRadius: 2,
  alignSelf: 'center',
  backgroundColor: '#ffffff'
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
