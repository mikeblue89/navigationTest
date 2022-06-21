/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

const Home = ({ navigation }) => {
  const [addnumber, setAddnumber] = React.useState(null);

  React.useEffect(() => {
    console.log('Valor use Effect: ', addnumber)
  }, [addnumber]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Image source={require('../assets/Multigroup.png')} />
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('QRModule');
        }}
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white' }}>Módulo QR presiona aquí</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Initial Value: ', addnumber);
          setAddnumber(addnumber + 1);
          console.log('Then: ', addnumber);
        }}
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white' }}>Use State Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
