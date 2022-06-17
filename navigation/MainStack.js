import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ScanScreen from '../screens/ScanScreen';
import { StyleSheet, Icon } from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: styles.customHeader,
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            title: 'Scan',
            headerStyle: styles.customHeader,
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  customHeader: {
    backgroundColor: '#fc141c',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainStack;
