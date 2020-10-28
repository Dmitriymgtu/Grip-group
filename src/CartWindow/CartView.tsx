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
            <ScrollView style={cards} showsVerticalScrollIndicator={ false } >
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
            </ScrollView>
            <Text style={total}>Итого: 0 р.</Text>
      </View>
    );
}

const { container, clearBottom, title, cards, total } = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    clearBottom: {
        fontFamily: "Montserrat",
        fontWeight: "300",
        fontSize: 18,
        lineHeight: 20,
        marginTop: 17,
        textAlign: 'right'
    },
    cards: {
        height: 380,
        // elevation: 10,
        // shadowColor: 'silver',
        // shadowRadius: 100,
        // shadowOpacity: 0.8,
        // // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 20,
        // shadowRadius: 1.41,
        // elevation: 10,
    },
    title: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 35,   
        marginBottom: 30,
    },
    total: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: 23,   
        marginTop: 31,
        textAlign: 'right'
    },
  });
