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
        </View>
    );
}

const { dish, dishImage, dishInfo, dishTitle, dishComposition, dishRow, dishPrice, font19, dishIncrease, textCenter, dishCounter } = StyleSheet.create({
    dish: {
      marginBottom: 18,
      height: 109,
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
      flex: 1
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
    font19: {
      fontSize: 19, 
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
    dishCounter: {
      flexDirection: 'row',
      width: 105,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });
