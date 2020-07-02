import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CameraStack from '../AppStack/CameraStack';
import MainStack from '../AppStack/MainStack';
import MapStack from '../AppStack/MapStack';

import {icMain, icCamera, icMap, icExit} from '../../assets';

function hiddenMap(state) {
  let status = false;
  if (state.index === 0) {
    const {routes} = state;
    if (routes[0] && routes[0].state) {
      if (routes[0].state.routes) {
        if (
          routes[0].state.routes &&
          routes[0].state.routes.length > 0 &&
          routes[0].state.routes[routes[0].state.routes.length - 1]
        ) {
          if (
            routes[0].state.routes[routes[0].state.routes.length - 1].name ===
              'EditProfile' ||
            routes[0].state.routes[routes[0].state.routes.length - 1].name ===
              'ChangePassword'
          ) {
            status = true;
          }
        }
      }
    }
  }
  return status;
}

function getStyle(name) {
  if (name === 'CameraStack') {
    return {width: 60, height: 60};
  } else {
    return {width: 22, height: 22};
  }
}

function getIcon(name) {
  let icon;
  switch (name) {
    case 'MainStack':
      icon = icMain;
      break;
    case 'CameraStack':
      icon = icCamera;
      break;
    case 'MapStack':
      icon = icMap;
      break;
    default:
      break;
  }
  return icon;
}

function MyTabBar({state, descriptors, navigation}) {
  if (state.index === 1) {
    return <View />;
  }
  return (
    <View style={styles.shadow} elevation={5}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
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

        if (hiddenMap(state) && route.name === 'MapStack') {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AuthStack');
              }}
              style={{alignItems: 'center', width: 80}}>
              <View style={styles.raduis}>
                <Image
                  style={{width: 10, height: 10, resizeMode: 'contain'}}
                  source={icExit}
                />
              </View>

              <Text style={styles.title}>Log out</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{alignItems: 'center', width: 80}}>
            <Image style={getStyle(route.name)} source={getIcon(route.name)} />
            {route.name !== 'CameraStack' && (
              <Text style={styles.title}>
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
  title: {
    color: '#3078FF',
    fontSize: 12,
    fontFamily: 'SFProDisplay-Regular',
    alignSelf: 'center',
    textAlign: 'center',
  },
  raduis: {
    borderWidth: 0.8,
    borderRadius: 50,
    padding: 5,
    borderColor: '#3078FF',
  },
});
