import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {MapScreen} from '../../../screens';

const MapStack = createAppContainer(
  createStackNavigator(
    {
      MapScreen,
    },
    {
      initialRouteName: 'MapScreen',
      header: null,
      headerMode: 'none',
    },
  ),
);

export default MapStack;
