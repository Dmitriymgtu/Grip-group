import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from '../Note'

export default function DishCard() {
    const [counter, setCounter] = useState(0)
    const fetchFonts = () => Font.loadAsync({'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf')})

    const [dataLoaded, setDataLoaded] = useState(false)

    if (!dataLoaded) 
        return (
        <AppLoading 
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
        />)

    return (
        <View style={dish}>
            <Image source={require('../../assets/myIcons/pazzo.jpg')} style={dishImage}/>
            <View style={dishInfo}>
              <Text style={dishTitle}>Pazzo</Text>
              <Text style={dishComposition}>Pazzo Pazzo Pazzo Pazzo Pazzo PazzoPazzoPazzo Pazzo PazzoPazzo Pazzo PazzoPazzo</Text>
              <View style={dishRow}>
                <Note style={dishPrice} title='300 р.'/>
                <View style={dishCounter}>
                  <TouchableOpacity onPress={() => setCounter(prev => prev - 1)} disabled={ counter <= 0 }><Text style={dishIncrease}>-</Text></TouchableOpacity>
                  <Text>{counter}</Text>
                  <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}><Text style={dishIncrease}>+</Text></TouchableOpacity> 
                </View>
              </View>
            </View>
        </View>
    );
}

const { dish, dishImage, dishInfo, dishTitle, dishComposition, dishRow, dishPrice, dishIncrease, dishCounter } = StyleSheet.create({
    dish: {
      marginBottom: 18,
      height: 109,
      width: 371,
      flexDirection: 'row'
    },
    dishImage: {
      height: 109,
      width: 109,
      borderWidth: 1,
      borderColor: 'black'
    },
    dishInfo: {
      marginLeft: 14,
      width: 248,
    },
    dishTitle: {
      fontSize: 16,
      marginBottom: 6,
      fontFamily: 'Montserrat'
    },
    dishComposition: {
      marginBottom: 6,
      fontSize: 12,
      fontFamily: 'Montserrat'
    },
    dishRow:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    dishPrice: {
    },
    dishIncrease: {
      height: 25,
      width: 25,
      borderRadius: 15,
      textAlign: 'center',
      paddingTop: 2,
      backgroundColor: '#E8E8E8' 
    },
    dishCounter: {
      flexDirection: 'row',
      width: 80,
      justifyContent: 'space-around',
      alignItems: 'center'
    }
  });
