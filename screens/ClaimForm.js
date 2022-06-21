/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import mock from '../Mock/mock';

const ClaimForm = ({ route, navigation }) => {
  console.log(route);
  const client = mock.qrResponse;
  const [clientName, setClientName] = useState(client.cliente);
  const [serviceNumber, setServiceNumber] = useState(client.numero_despacho);
  const [orderNumber, setOrderNumber] = useState(client.numero_pedido);
  const [deliveryDate, setDeliveryDate] = useState(client.fecha_de_entrega);
  const [deliverySchedule, setDeliverySchedule] = useState(
    client.hora_de_entrega,
  );
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={styles.redSection}>
        <Icon
          style={{ color: 'black', paddingVertical: 5 }}
          name="qrcode-scan"
          size={80}
        ></Icon>
        <Text style={styles.redSectionLabel}>DATOS DE CÓDIGO QR</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.inputLabel}>Cliente:</Text>
            <TextInput
              style={styles.inputValue}
              value={clientName}
              editable={false}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#d4d5d6',
            borderBottomWidth: 1,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.inputLabel}>Despacho:</Text>
            <TextInput
              style={styles.inputValue}
              value={serviceNumber}
              editable={false}
            ></TextInput>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.inputLabel}>Pedido:</Text>
            <TextInput
              style={styles.inputValue}
              value={orderNumber}
              editable={false}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#d4d5d6',
            borderBottomWidth: 1,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.inputLabel}>Fecha solicitud de entrega:</Text>
            <TextInput
              style={styles.inputValue}
              value={deliveryDate}
              editable={false}
            ></TextInput>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.inputLabel}>Hora solicitud de entrega:</Text>
            <TextInput
              style={styles.inputValue}
              value={deliverySchedule}
              editable={false}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.redSection}>
        <Text style={[styles.redSectionLabel, {paddingTop: 105}]}>DATOS DE ENTREGA</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  redSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    marginHorizontal: 10,
  },
  redSectionLabel: { color: 'black', fontSize: 25, fontWeight: 'bold' },
  inputLabel: {
    color: 'grey',
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 15,
  },
  inputValue: {
    color: 'black',
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClaimForm;
