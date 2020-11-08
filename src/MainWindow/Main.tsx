import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AddressTitle from './AddressTitle'
import RestaurantCard from './RestaurantCard'
import Constants from 'expo-constants';
import { YellowBox } from 'react-native';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';


function Main(props: any) {
  YellowBox.ignoreWarnings(['Remote debugger']);
  return (
    <>
      <AddressTitle/>
      <ScrollView style={scroll} showsVerticalScrollIndicator={false}>
        {props.store.restaurants.map((restaurant: any, index: number) => <RestaurantCard key={index} restaurant={restaurant}/>)}
      </ScrollView>
    </>
    
  );
}

const { scroll } = StyleSheet.create({
  scroll: {
    marginHorizontal: 20
  }
});

export default inject('store')(observer(Main))