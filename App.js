/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {SafeAreaView} from 'react-navigation';
import {Provider} from 'react-redux';
import InitialStack from './src/routers/InitialStack';
import store from './src/redux/store';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2);'}}>
        <Provider store={store}>
          <SafeAreaView style={{flex: 1}} forceInset={{bottom: 'never'}}>
            <InitialStack />
          </SafeAreaView>
        </Provider>
      </View>
    );
  }
}

export default App;

var styles = StyleSheet.create({});
