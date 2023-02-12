import React, { useState, useEffect } from 'react';
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import MyItems from './screens/MyItems';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="MyItems" component={MyItems} options={{headerShown: false}} />
        <Tab.Screen name="Scanner" component={Scanner} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center'
  }
})