import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {CameraScreen} from '../../../screens';

const CameraStack = createAppContainer(
  createStackNavigator(
    {
      CameraScreen,
    },
    {
      initialRouteName: 'CameraScreen',
      header: null,
      headerMode: 'none',
    },
  ),
);

export default CameraStack;
