import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CameraStack from '../AppStack/CameraStack';
import MainStack from '../AppStack/MainStack';
import MapStack from '../AppStack/MapStack';
import AdminStack from '../AppStack/AdminStack';

import {icMain, icCamera, icMap, icKey} from '../../assets';

function MyTabBar({state, descriptors, navigation, onChangeType}) {
  console.log(state.routes);
  // if (state.index === 2) {
  //   return <View />;
  // }

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
        console.log(state.index);
        const onPress = () => {
          onChangeType();
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
                  ? {width: 22, height: 22, resizeMode: 'contain'}
                  : {width: 60, height: 60, resizeMode: 'contain'}
              }
              source={
                route.name === 'MainStack'
                  ? icMain
                  : route.name === 'All water'
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
                {route.name === 'MainStack'
                  ? 'My water'
                  : route.name === 'AdminStack'
                  ? 'Admin'
                  : 'Map'}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

class App extends React.Component {
  state = {
    type: true,
  };
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        tabBar={(props) => (
          <MyTabBar
            onChangeType={() => {
              this.setState({type: !this.state.type});
            }}
            {...props}
          />
        )}>
        <Tab.Screen name="AdminStack" component={AdminStack} />
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
