import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import MainStack from './MainStack';
import CameraStack from './CameraStack';
import MapStack from './MapStack';

export default createAppContainer(
  createBottomTabNavigator(
    {
      MainStack: MainStack,
      CameraStack: CameraStack,
      MapStack: MapStack,
    },
    {
      initialRouteName: 'MainStack',

      defaultNavigationOptions: ({navigation}) => ({
        tabBarOptions: {
          showLabel: true,
        },
        // tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //   const { routeName } = navigation.state;

        //   let iconName;
        //   switch (routeName) {
        //     case "Home": {
        //       iconName = icHome;
        //       break;
        //     }
        //     case "Question": {
        //       iconName = icChat;
        //       break;
        //     }
        //     case "Rating": {
        //       iconName = icStatic;
        //       break;
        //     }

        //     default:
        //       break;
        //   }
        //   return (
        //     <Image
        //       source={iconName}
        //       style={[
        //         styles.icon,
        //         { tintColor: focused ? "#FE5365" : "#E0E2EF" }
        //       ]}
        //     />
        //   );
        // }
      }),
    },
  ),
);

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 28,
    height: 28,
  },
});
