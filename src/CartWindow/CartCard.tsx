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
              <Text style={font16}>
                  Заголовок блюда
              </Text>
              <Text style={font16}>
                  700 р.
              </Text>
          </View>
          <View style={dishCounter}>
            <View style={dishIncrease}>
              <TouchableOpacity onPress={() => setCounter(prev => prev - 1)} disabled={ counter <= 0 }>
                <Text style={textCenter}>-</Text>
              </TouchableOpacity>
            </View>
            <Text style={font19}>{counter}</Text>
            <View style={dishIncrease}>
              <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}>
                <Text style={textCenter}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
}

const { dish, dishImage, dishInfo, dishTitle, font16, textCenter, dishIncrease, font19, dishCounter } = StyleSheet.create({
    dish: {
      marginBottom: 20,
      height: 80,
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
      flex: 1,
    },
    dishTitle: {
      fontSize: 16,
      marginBottom: 21,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontFamily: 'Montserrat'
    },
    font16: {
      fontSize: 16, 
    },
    dishIncrease: {
      height: 30,
      width: 30,
      borderRadius: 20,
      fontSize: 19,
      backgroundColor: '#E8E8E8' 
    },
    textCenter: {
      textAlign: 'center',
      paddingTop: 5,
    },
    font19: {
      fontSize: 19,
    },
    dishCounter: {
      flexDirection: 'row',
      width: 105,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });
