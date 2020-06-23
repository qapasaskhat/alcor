import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class LinearColor extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#BDA6FF', '#3078FF', '#0057FF']}
        start={{x: 1.0, y: -0.15}}
        end={{x: 0.0, y: 1.0}}
        locations={[0, 0.4, 1]}
        style={[styles.linearGradient, this.props.styles && this.props.styles]}>
        {this.props.children}
      </LinearGradient>
    );
  }
}

export default LinearColor;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
