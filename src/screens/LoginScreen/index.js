import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearColor from '../../components/LinearColor';
import {logo, arrow} from '../../assets/index';
import TextInput from '../../components/TextInput';

import {WhiteButton, BlueButton} from '../../components/Button';
import Social from '../../components/Social';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearColor styles={styles.style}>
          <View key="header">
            <Image source={logo} style={styles.logo} />
            <View style={styles.viewText}>
              <Text style={styles.text}>
                Let’s rebuild{'\n'}our trust in water{'\n'}
                <Text style={styles.text1}>together!</Text>
              </Text>
            </View>
          </View>
          <View key={'input'} style={{marginTop: 0}}>
            <TextInput
              label={'Email'}
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
              label={'Password'}
              styles={{marginTop: 15}}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RestoreScreen')}
              style={styles.restore}>
              <Text style={styles.restoreTxt}>Restore password</Text>
              <Image source={arrow} style={styles.arrow} />
            </TouchableOpacity>
          </View>
          <View key={'bottom'}>
            <View style={{marginBottom: 20}}>
              <WhiteButton title={'Log in'} />
              <BlueButton
                onPress={() => this.props.navigation.navigate('RegisterScreen')}
                title={'Registration'}
                style={{marginTop: 15}}
              />
            </View>
            <Social />
          </View>
        </LinearColor>
      </View>
    );
  }
}

export default LoginScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  style: {
    paddingTop: 55,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  viewText: {marginTop: 25, marginLeft: 10},
  logo: {width: 47, height: 55},
  text: {
    color: 'rgba(255, 255, 255, 0.74)',
    fontSize: 25,
    fontFamily: 'SFProDisplay-Bold',
    textTransform: 'uppercase',
  },
  text1: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'SFProDisplay-Bold',
    textTransform: 'uppercase',
  },
  restore: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  arrow: {
    width: 7,
    height: 7,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  restoreTxt: {color: 'white', fontFamily: 'SFProDisplay-Regular'},
  socialButton: {
    width: 41,
    height: 29,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
