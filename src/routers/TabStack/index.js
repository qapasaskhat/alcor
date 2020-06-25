import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CameraStack from './CameraStack';
import MainStack from './MainStack';
import MapStack from './MapStack';

import {icMain, icCamera, icMap} from '../../assets';

function MyTabBar({state, descriptors, navigation}) {
  console.log(state.routes);
  if (state.index === 1) {
    return <View />;
  }
  return (
    <View style={styles.shadow} elevation={5}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{alignItems: 'center', width: 80}}>
            <Image
              style={
                route.name !== 'CameraStack'
                  ? {width: 22, height: 22}
                  : {width: 60, height: 60}
              }
              source={
                route.name === 'MainStack'
                  ? icMain
                  : route.name === 'CameraStack'
                  ? icCamera
                  : icMap
              }
            />
            {route.name !== 'CameraStack' && (
              <Text
                style={{
                  color: isFocused ? '#3078FF' : '#3078FF',
                  fontSize: 12,
                  fontFamily: 'SFProDisplay-Regular',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                {route.name === 'MainStack' ? 'My water' : 'Map'}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

class App extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="MainStack" component={MainStack} />
        <Tab.Screen
          name="CameraStack"
          component={CameraStack}
          options={{tabBarVisible: false}}
        />
        <Tab.Screen name="MapStack" component={MapStack} />
      </Tab.Navigator>
    );
  }
}

export default App;

var styles = StyleSheet.create({
  shadow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: 'white',
    zIndex: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
