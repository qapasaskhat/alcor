import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class AdminScreen extends React.Component {
  state = {
    modal: false,
    animation: 'linear',
    type: [
      {index: 1, title: 'My water'},
      {index: 0, title: 'All water'},
    ],
    current_type: {index: 0, title: 'All water'},
  };
  render() {
    const {current_type, onPressOne, onPressTwo} = this.props;
    return (
      <View style={styles.horizontalView}>
        <TouchableOpacity
          onPress={() => onPressOne()}
          style={[
            styles.btn,
            {
              backgroundColor: !current_type.index ? '#3078FF' : '#EBEBEC',
            },
          ]}>
          <Text
            style={[
              styles.txt,
              {color: !current_type.index ? 'white' : '#3F3F3F'},
            ]}>
            All WATER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressTwo()}
          style={[
            styles.btn,
            {
              backgroundColor: current_type.index ? '#3078FF' : '#EBEBEC',
            },
          ]}>
          <Text
            style={[
              styles.txt,
              {color: current_type.index ? 'white' : '#3F3F3F'},
            ]}>
            MY WATER
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AdminScreen;

var styles = StyleSheet.create({
  horizontalView: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    marginTop: 2,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: '40%',
    borderRadius: 47,
  },
  txt: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '600',
  },
});
