// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import AdminTabStack from './AdminTabStack';
// import UserTabStack from './UserTabStack';

class App extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AdminTabStack"
            component={AdminTabStack}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="UserTabStack"
            component={UserTabStack}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
