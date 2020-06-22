import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#BDA6FF', '#3078FF', '#0057FF']}
          start={{x: 1.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0, 0.4, 1]}
          style={styles.linearGradient}>
          <Text>dsre</Text>
        </LinearGradient>
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
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
