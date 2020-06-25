import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CameraScreen} from '../../../screens';

class CameraStack extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    );
  }
}

export default CameraStack;
