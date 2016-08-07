import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
    alignSelf: 'center',
  },
  cancelIcon: {
    flex: 1,
    bottom: 0,
    left: 20,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
});
