/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ScanScreen from '../screens/ScanScreen';
import QrMainScreen from '../screens/QrMainScreen';
import ClaimForm from '../screens/ClaimForm';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainModule" component={Home} />
      <Stack.Screen name="QRModule" component={QrMainScreen} />
      <Stack.Screen name="ScanModule" component={ScanScreen} />
      <Stack.Screen name="ClaimModule" component={ClaimForm} />
    </Stack.Navigator>
  );
};

export { MainScreen };

const ProfileScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainModule" component={Home} />
      <Stack.Screen name="QRModule" component={QrMainScreen} />
      <Stack.Screen name="ScanModule" component={ScanScreen} />
    </Stack.Navigator>
  );
};

export { ProfileScreen };
