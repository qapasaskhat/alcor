import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

class WhiteButton extends React.Component {
  render() {
    const {style, textStyle, onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          if (onPress) onPress();
        }}
        style={[styles.container, style && style]}>
        <Text style={[styles.text, textStyle && textStyle]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default WhiteButton;

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 13,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3078FF',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
  },
});
