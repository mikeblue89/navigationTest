/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


const ScanScreen = () => {
  const [name, setName] = useState('');
  const [peso, setPeso] = useState(null);
  const [loading, setLoad] = useState(true);

  useEffect(() => {}, [loading]);
  const onCheckResults = e => {
    const response = JSON.parse(e.data);
    console.log(typeof response);
    console.log(RNCamera.Constants.FlashMode.on);
    setName(response.Hola);
    setPeso(response.Heigth);
    setLoad(false);
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
      {/* <View style={{ flex: 1, alignItems: 'center' }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            paddingTop: 50,
          }}
        >
          Scan Screen
        </Text>
      </View> */}
      <View style={{ flex: 1 }}>
        <QRCodeScanner
          onRead={onCheckResults}
          flashMode={RNCamera.Constants.FlashMode.auto}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScanScreen;
