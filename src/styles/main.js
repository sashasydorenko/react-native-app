import { StyleSheet } from 'react-native';
import COLORS from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonShowPlace: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    paddingTop: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: .3,
    shadowRadius: 5,
  },
  buttonShowPlaceText: {
    color: COLORS.green,
    fontSize: 24,
    alignSelf: 'center',
  },
});
