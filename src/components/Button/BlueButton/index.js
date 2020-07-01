import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const BlueButton = ({style, textStyle, onPress}) => {
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
};

export default BlueButton;

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#518DFF',
    borderRadius: 13,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
  },
});
