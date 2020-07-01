import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {logo, icMore, close} from '../../assets';
class Header extends React.Component {
  render() {
    const {title, onPress, onBack} = this.props;
    return (
      <View key={'header'} style={styles.container}>
        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={logo} style={styles.logo} />
            <Text style={{color: '#585858', fontSize: 30}}>{title}</Text>
          </View>
          <TouchableOpacity style={{marginRight: 10}} onPress={onPress}>
            <Image
              source={onBack ? close : icMore}
              style={{
                width: onBack ? 18 : 6,
                height: 25,
                resizeMode: 'contain',
                tintColor: '#C4C4C4',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    height: 130,
    width: '100%',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 42,
    resizeMode: 'contain',
    tintColor: '#3078FF',
  },
});
