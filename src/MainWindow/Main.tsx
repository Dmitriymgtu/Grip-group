import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AddressTitle from './AddressTitle'
import RestaurantCard from './RestaurantCard'
import Constants from 'expo-constants';
import { YellowBox } from 'react-native';


export default function Main() {
  YellowBox.ignoreWarnings(['Remote debugger']);
  return (
    <>
      <AddressTitle/>
      <ScrollView style={scroll} showsVerticalScrollIndicator={false}>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </ScrollView>
    </>
    
  );
}

const { scroll } = StyleSheet.create({
  scroll: {
    marginHorizontal: 20
  }
});
