/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainStack from './navigation/MainStack';
import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './components/Tabs';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onTabPress = () => {
    console.log('Se Presiono un boton');
  };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={styles.firstSection}>
        <Text style={styles.sectionTitle}>
          <Icon name="menu" size={30}></Icon>
        </Text>
      </View>
      <View style={styles.secondSection}>
        <MainStack />
      </View>
      <View style={styles.thirdSection}>
        <Tabs onTabPress={onTabPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstSection: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fc141c',
    justifyContent: 'center',
  },
  secondSection: {
    flex: 10,
  },
  thirdSection: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: '#D4D6D1',
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    position: 'absolute',
    left: 15,
    color: 'white',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
