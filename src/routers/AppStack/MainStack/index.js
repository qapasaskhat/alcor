import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MainScreen,
  InnerScreen,
  EditProfile,
  ChangePassword,
} from '../../../screens';

class MainStack extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator mode={'card'} screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="InnerScreen" component={InnerScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    );
  }
}

export default MainStack;
