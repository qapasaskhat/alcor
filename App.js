/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Provider} from 'react-redux';
import InitialStack from './src/routers/InitialStack';
import store from './src/redux/store';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2);'}}>
        <Provider store={store}>
          {/* <SafeAreaView style={{flex: 1}} forceInset={{bottom: 'never'}}> */}
          <InitialStack />
          {/* </SafeAreaView> */}
        </Provider>
      </View>
    );
  }
}

export default App;

var styles = StyleSheet.create({});

{
  /* <LinearGradient
  colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
  start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
  style={styles.grediant}
>
  <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText}>
      LOGIN
                         </Text>
  </TouchableOpacity>
</LinearGradient> */
}
