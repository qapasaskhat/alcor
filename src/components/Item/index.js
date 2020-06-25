import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

class Item extends React.Component {
  render() {
    const {sourceLeft, titleLeft, sourceRight, titleRight} = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.horizontal}>
          <Image source={sourceLeft} style={styles.sourceLeft} />
          <Text style={styles.titleLeft}>{titleLeft}</Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.titleRight}>{titleRight}</Text>
          <Image source={sourceRight} style={styles.sourceRight} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item;

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  horizontal: {flexDirection: 'row', alignItems: 'center'},
  titleLeft: {
    color: '#585858',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 16,
    marginLeft: 5,
  },
  titleRight: {
    color: '#3078FF',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 16,
  },
  sourceRight: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  sourceLeft: {width: 15, height: 15, resizeMode: 'contain'},
});
