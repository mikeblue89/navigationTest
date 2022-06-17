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
import { StyleSheet, useColorScheme, View, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainStack from './navigation/MainStack';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
        <Text style={styles.sectionTitle}>Menu Component</Text>
      </View>
      <View style={styles.secondSection}>
        <MainStack />
      </View>
      <View style={styles.thirdSection}>
        <Text style={styles.sectionDescription}>Tabs Component</Text>
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
    borderColor: 'black',
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
