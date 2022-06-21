/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const QrMainScreen = ({navigation}) => {
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
        <Text style={styles.titleLabel}>Escanear Código QR</Text>
        <Text style={styles.paragraphLabel}>
          Coloque el código QR dentro del marco para escanear, evite agitar para
          obtener resultados rápidamente.
        </Text>
      </View>
      <View style={styles.secondSection}>
        <Icon
          style={{ color: 'black', marginBottom: 80 }}
          name="qrcode-scan"
          size={190}
        ></Icon>
        <TouchableOpacity style={styles.btn} onPress={() => {
          navigation.navigate('ScanModule');
        }}>
          <Text style={styles.buttonLabel}>
            <Icon name="qrcode-scan" size={25}></Icon> Identificar documento
          </Text>
        </TouchableOpacity>
      </View>
      <Text>Hello</Text>
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
    justifyContent: 'center',
  },
  secondSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLabel: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 60,
  },
  paragraphLabel: { color: 'black', fontSize: 18 },
  buttonLabel: { color: 'white', fontSize: 25, paddingHorizontal: 10, paddingVertical: 7 },
  btn: {
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#fc141c',
  },
});

export default QrMainScreen;
