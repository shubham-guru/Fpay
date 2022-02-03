import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import SplashScreen from './SplashScreen';
import Signup from './Signup';
import Index from './Index';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{header: () => null}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Index"
          component={Index}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
