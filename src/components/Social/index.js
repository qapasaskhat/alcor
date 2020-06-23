import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {icFacebook, icLinkedin, icGoogle, icTwitter} from '../../assets';

class Social extends React.Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <View style={styles.container} key={'social'}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={icFacebook}
            style={{width: 10, height: 18, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={icTwitter}
            style={{width: 18, height: 14, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={icLinkedin}
            style={{width: 16, height: 16, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={icGoogle}
            style={{width: 20, height: 13, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Social;

var styles = StyleSheet.create({
  socialButton: {
    width: 41,
    height: 29,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#357CFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: -15,
    marginRight: -15,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 30,
    paddingBottom: 30,
  },
});
