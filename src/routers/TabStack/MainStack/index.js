import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {MainScreen} from '../../../screens';

const MainStack = createAppContainer(
  createStackNavigator(
    {
      MainScreen,
    },
    {
      initialRouteName: 'MainScreen',
      header: null,
      headerMode: 'none',
    },
  ),
);

export default MainStack;
