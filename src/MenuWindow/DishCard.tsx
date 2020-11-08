import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from '../Note'

export default function DishCard(props: any) {
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
        <TouchableOpacity style={dish} onPress={() => alert(props.dish.description)}>
            <Image source={require('../../assets/myIcons/pazzo.jpg')} style={dishImage}/>
            <View style={dishInfo}>
              <Text style={dishTitle}>{props.dish.title}</Text>
              {/* <Text style={dishComposition}>{props.dish.description}</Text> */}
              <View style={dishRow}>
                <Note style={dishPrice} title={props.dish.cost + ' р.'}/>
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
        </TouchableOpacity>
    );
}

const { dish, dishImage, dishInfo, dishTitle, dishComposition, dishRow, dishPrice, font19, dishIncrease, textCenter, dishCounter } = StyleSheet.create({
    dish: {
      marginBottom: 18,
      height: 109,
      flexDirection: 'row'
    },
    dishImage: {
      height: 90,
      width: 90,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'black'
    },
    dishInfo: {
      marginLeft: 14,
      flex: 1,
      justifyContent: 'space-between' 
    },
    dishTitle: {
      fontSize: 22,
      marginBottom: 6,
      lineHeight: 24,
      color: 'black',
      fontWeight: '600',
      fontFamily: 'Montserrat'
    },
    dishComposition: {
      marginBottom: 6,
      fontSize: 15,
      height: 40,
      fontFamily: 'Montserrat'
    },
    dishRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
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
