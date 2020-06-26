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
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import InitialStack from './src/routers/InitialStack';
import store from './src/redux/store';
class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider style={{backgroundColor: 'white'}}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text>Hello world!</Text>
            <Provider store={store}>
              <InitialStack />
            </Provider>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
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
