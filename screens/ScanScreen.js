/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/AntDesign';

const ScanScreen = () => {
  const [name, setName] = useState('');
  const [peso, setPeso] = useState(null);
  const [loading, setLoad] = useState(true);
  const [flash, setFlash] = useState(0);

  useEffect(() => {}, [loading]);
  useEffect(() => {}, [flash]);
  const onCheckResults = e => {
    const response = JSON.parse(e.data);
    console.log(RNCamera.Constants.FlashMode.auto);
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
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 8 }}>
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
      </View>
      <View style={{ flex: 3 }}>
        <QRCodeScanner onRead={onCheckResults} flashMode={flash} />
      </View>
      <View style={{ flex: 1, alignItems: 'center', paddingVertical: 8 }}>
        {loading ? (
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 50,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                borderRadius: 15,
                marginHorizontal: 10,
              }}
              onPress={() => {
                setFlash(1);
              }}
            >
              <Icon
                style={{
                  color: 'white',
                  paddingHorizontal: 6,
                  paddingVertical: 6,
                }}
                name="flashlight"
                size={20}
                color="#4F8EF7"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                borderRadius: 15,
                marginHorizontal: 10,
              }}
              onPress={() => {
                setFlash(1);
              }}
            >
              <Icon
                style={{
                  color: 'white',
                  paddingHorizontal: 6,
                  paddingVertical: 6,
                }}
                name="cloud"
                size={20}
                color="#4F8EF7"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ paddingTop: 50 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
              Nombre: {name}
            </Text>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
              Peso: {`${peso}`}
            </Text>
          </View>
        )}
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
