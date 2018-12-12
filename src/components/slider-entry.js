import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/slider';

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render () {
    const { data: { name, address, schedule_today } } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => { alert(`You've clicked '${name}'`); }}
      >
        <View style={styles.slide}>
          <View style={styles.name}>
            <Text style={styles.nameText} numberOfLines={2}>{name.toUpperCase()}</Text>
          </View>

          <View style={styles.inner}>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.scheduleToday}>{schedule_today.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
