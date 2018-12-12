import React, { Component, PropTypes } from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './slider-entry';
import styles, { sliderWidth, itemWidth, itemHeight, sliderHeight } from '../styles/slider';

export default class SliderOfPlaces extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  _renderItem = ({ item, index }) => {
    return <SliderEntry data={item} />
  }

  render() {
    return (
      <Carousel
        data={this.props.data}
        renderItem={this._renderItem}

        itemWidth={itemWidth}
        itemHeight={itemHeight}
        sliderWidth={sliderWidth}
        sliderHeight={sliderHeight}

        containerCustomStyle={styles.slider}

        inactiveSlideScale={1}
        inactiveSlideOpacity={0.8}

        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
      />
    )
  }
}

// _centerMapOnMarker (markerIndex) {
//   const mapRef = this._mapView;
//   const markerData = this.state.markers[markerIndex];
//
//   if (!markerData || !mapRef) {
//       return;
//   }
//   mapRef.animateToRegion({
//     latitude: markerData.geolocation.latitude - CENTER_LAT_OFFSET,
//     longitude: markerData.geolocation.longitude,
//     latitudeDelta: 0.0315,
//     longitudeDelta: 0.0258
//   });
// }
