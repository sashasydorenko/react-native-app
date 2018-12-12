import { StyleSheet, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import COLORS from './colors';

const { width, height } = Dimensions.get('window');

const slideWidth = width * (DeviceInfo.isTablet() ? .26 : .5);
const slideHorizontalMargin = 10;

export const sliderWidth = width;
export const itemWidth = slideWidth + slideHorizontalMargin * 2;
export const itemHeight = 140;
export const sliderHeight = 140;

export default StyleSheet.create({
  slider: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
  },
  slideInnerContainer: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: slideHorizontalMargin,
  },
  slide: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
  name: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 55,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  nameText: {
    color: COLORS.white,
    fontSize: 13,
    alignSelf: 'center',
  },
  inner: {
    padding: 15,
  },
  address: {
    color: COLORS.gray,
    fontSize: 13,
    paddingBottom: 5
  },
  scheduleToday: {
    color: COLORS.green,
    fontSize: 13,
  },
});
