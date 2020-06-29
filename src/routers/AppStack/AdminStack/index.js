import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {AdminInnerScreen, AdminMainScreen} from '../../../screens';

class MainStack extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator mode={'card'} screenOptions={{headerShown: false}}>
        <Stack.Screen name="AdminMainScreen" component={AdminMainScreen} />
        <Stack.Screen name="AdminInnerScreen" component={AdminInnerScreen} />
      </Stack.Navigator>
    );
  }
}

export default MainStack;
