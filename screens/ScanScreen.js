/* eslint-disable radix */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


const ScanScreen = ({ navigation }) => {
  const [loading, setLoad] = useState(true);

  const jsonChecker = data => {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  };

  useEffect(() => {}, [loading]);

  const onCheckResults = e => {
    const jsonResult = jsonChecker(e.data);

    if (jsonResult) {
      // setJsonRequest(JSON.parse(e.data));
      // console.log('Json: ', jsonRequest);
    } else {
      let rawData = e.data.split('-');
      navigation.navigate('ClaimModule',{
        OrderNumber: parseInt(rawData[0]),
        DeliveryNuber: parseInt(rawData[1]),
      });
    }
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
