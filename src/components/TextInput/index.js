import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Reinput from 'reinput';

class TextInput extends React.Component {
  render() {
    const {label, onChangeText, value, styles, editColor} = this.props;
    return (
      <View style={[styles && styles]}>
        <Reinput
          onChangeText={(text) => onChangeText(text)}
          placeholderColor={'white'}
          labelActiveColor={editColor ? 'transparent' : 'white'}
          label={label}
          value={value}
          color={editColor ? '#3078FF' : 'white'}
          underlineActiveColor={editColor ? '#3078FF' : 'white'}
          labelColor={editColor ? '#3078FF' : 'white'}
          underlineColor={'transparent'}
          style={{padding: 0, height: 44}}
        />
        <LinearGradient
          colors={[editColor ? '#3078FF' : 'white', 'rgba(255, 255, 255, 0)']}
          locations={[0, 1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            width: '100%',
            height: 2,
            bottom: 0,
            position: 'absolute',
          }}></LinearGradient>
      </View>
    );
  }
}

export default TextInput;

var styles = StyleSheet.create({});
