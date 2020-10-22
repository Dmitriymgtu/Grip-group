import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from '../Note'

export default function CartCard() {
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
          <View style={dishTitle}>
              <Text>
                  Заголовок блюда
              </Text>
              <Text>
                  700 р.
              </Text>
          </View>
          <View style={dishCounter}>
            <TouchableOpacity onPress={() => setCounter(prev => prev - 1)} disabled={ counter <= 0 }>
              <Text style={dishIncrease}>-</Text>
              </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}>
              <Text style={dishIncrease}>+</Text>
              </TouchableOpacity> 
          </View>
        </View>
      </View>
    );
}

const { dish, dishImage, dishInfo, dishTitle, dishIncrease, dishCounter } = StyleSheet.create({
    dish: {
      marginBottom: 20,
      height: 80,
      width: 371,
      flexDirection: 'row'
    },
    dishImage: {
      height: 80,
      width: 80,
      borderWidth: 1,
      borderColor: 'black'
    },
    dishInfo: {
      marginLeft: 26,
      width: 265,
    },
    dishTitle: {
      fontSize: 16,
      marginBottom: 21,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontFamily: 'Montserrat'
    },
    dishIncrease: {
      height: 35,
      width: 35,
      borderRadius: 50,
      textAlign: 'center',
      paddingTop: 2,
      backgroundColor: '#E8E8E8' 
    },
    dishCounter: {
      flexDirection: 'row',
      width: 105,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });
