import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './components/StackNavigator';
import { LogBox } from 'react-native';


function App(){
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    "Bottom Tab Navigator: 'tabBarOptions' is deprecated. Migrate the options to 'screenOptions' instead."
  ]);
  return (
    <NavigationContainer style={styles.container}>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
  },
})
export default App;
