import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from '../Note'
import CartCard from './CartCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function CartView() {
    const fetchFonts = () => Font.loadAsync({'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf')})

    const [dataLoaded, setDataLoaded] = useState(false)

    if (!dataLoaded) 
        return (
        <AppLoading 
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
        />)

    return (
      <View style={container}>
          <TouchableOpacity>
              <Text style={clearBottom}>Очистить</Text>
          </TouchableOpacity>
          <Text style={title}>Корзина</Text>
          <ScrollView>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
            <CartCard/>
          </ScrollView>
          <Text style={total}>Итого:</Text>
      </View>
    );
}

const { container, clearBottom, title, total } = StyleSheet.create({
    container: {

    },
    clearBottom: {
    fontFamily: "Montserrat",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 20,
    alignItems: 'flex-end'
    },
    title: {
        
    },
    total: {

    },
  });
