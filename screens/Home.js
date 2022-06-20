/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image source={require('../assets/Multigroup.png')} />
      <Text>Home Screen</Text>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Scan');
        }}
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 8,
        }}>
        <Text style={{color: 'white'}}>Press here</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('QRMain');
        }}
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 8,
        }}>
        <Text style={{color: 'white'}}>Módulo QR presiona aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
