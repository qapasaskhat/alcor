import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {right, icImage, close} from '../../../assets';

class InnerCard extends React.Component {
  render() {
    const {item, onPress, status} = this.props;
    return (
      <View style={styles.body}>
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
            <TouchableOpacity
              onPress={() => onPress()}
              style={{
                width: 27,
                height: 27,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={status ? icImage : close}
                style={
                  status
                    ? {width: 27, height: 27, resizeMode: 'contain'}
                    : {width: 14, height: 14, resizeMode: 'contain'}
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#B6B6B6', fontSize: 13, fontWeight: '500'}}>
            Amherst Center Massachusetts
          </Text>
        </View>
      </View>
    );
  }
}

export default InnerCard;

var styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    zIndex: 10,
    width: '100%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
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
