import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LoginScreen, RegisterScreen} from '../../screens/index';

const AuthStack = createAppContainer(
  createStackNavigator(
    {
      LoginScreen: LoginScreen,
      RegisterScreen: RegisterScreen,
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: 'LoginScreen',
    },
  ),
);
export default AuthStack;
