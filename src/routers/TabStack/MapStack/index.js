import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MapScreen} from '../../../screens';

class MapStack extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    );
  }
}

export default MapStack;
