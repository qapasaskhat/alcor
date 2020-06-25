import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {right} from '../../../assets';

class ListCard extends React.Component {
  render() {
    const {item, onPress} = this.props;
    return (
      <TouchableOpacity onPress={() => onPress()} style={styles.body}>
        <View style={styles.div}>
          {item.active ? (
            <LinearGradient
              colors={['#67EC9C', '#63D6A5']}
              start={{x: 0.0, y: 0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0, 1]}
              style={{
                flex: 1,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}></LinearGradient>
          ) : (
            <LinearGradient
              colors={['#FF8097', '#F68C98']}
              start={{x: 0.0, y: 0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0, 1]}
              style={{
                flex: 1,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}></LinearGradient>
          )}
        </View>
        <View style={styles.container}>
          <Text style={styles.time}>14:23</Text>
          <View style={styles.horizontal}>
            <Text style={styles.day}>11.03.2020</Text>
            <Image
              source={right}
              style={{width: 13, height: 13, resizeMode: 'contain'}}
            />
          </View>
          <Text style={{color: '#B6B6B6', fontSize: 13, fontWeight: '500'}}>
            Amherst Center Massachusetts
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ListCard;

var styles = StyleSheet.create({
  body: {flexDirection: 'row', width: '100%', borderRadius: 12, marginTop: 10},
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 28,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    paddingRight: 15,
  },
  time: {
    color: '#585858',
    fontSize: 15,
    fontFamily: 'SFProDisplay-Bold',
    lineHeight: 20,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  day: {
    color: '#3078FF',
    fontSize: 15,
    fontFamily: 'SFProDisplay-Bold',
    lineHeight: 20,
  },
  div: {
    width: 16,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
