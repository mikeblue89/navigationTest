/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tabStyle from './TabsStyles';

const Tabs = ({ onTabPress }) => {
  return (
    <View style={[tabStyle.tabContainer, { flexDirection: 'row' }]}>
      <TouchableOpacity style={tabStyle.tabIcon} onPress={onTabPress}>
        <Icon name="home-outline" size={40} style={{ color: 'black' }} />
      </TouchableOpacity>
      <TouchableOpacity style={tabStyle.tabIcon} onPress={onTabPress}>
        <Icon
          name="document-text-outline"
          size={40}
          style={{ color: 'black' }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={tabStyle.tabIcon} onPress={onTabPress}>
        <Icon
          name="md-help-circle-outline"
          size={40}
          style={{ color: 'black' }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;
