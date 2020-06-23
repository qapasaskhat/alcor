import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Reinput from 'reinput';
class TextInput extends React.Component {
  render() {
    const {label, onChangeText, value, styles} = this.props;
    return (
      <View style={[styles && styles]}>
        <Reinput
          onChangeText={(text) => onChangeText(text)}
          placeholderColor={'white'}
          labelActiveColor={'white'}
          label={label}
          value={value}
          color={'white'}
          underlineActiveColor={'white'}
          labelColor={'white'}
          underlineColor={'transparent'}
          style={{padding: 0, height: 44}}
        />
        <LinearGradient
          colors={['white', 'rgba(255, 255, 255, 0)']}
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
