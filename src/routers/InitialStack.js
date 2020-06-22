import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthStack from './AuthStack';

const MyApp = createStackNavigator(
  {
    AuthStack: AuthStack,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'AuthStack',
  },
);

const App = createAppContainer(MyApp);

export default App;
