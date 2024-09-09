import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import PhanHai from './src/screens/PhanHai';
import PhanBa from './src/screens/PhanBa';
import PhanBon from './src/screens/PhanBon';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
   
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Phần 1" component={DetailScreen} />
        <Stack.Screen name="Phần 2" component={PhanHai} />
        <Stack.Screen name="Phần 3" component={PhanBa} />
        <Stack.Screen name="Phần 4" component={PhanBon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
