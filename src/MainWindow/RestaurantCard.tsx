import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from '../Note'

export default function RestaurantCard() {

  const fetchFonts = () => Font.loadAsync({'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf')})

  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) 
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )

  return (
    <TouchableOpacity style={card} onPress={() => console.log('hi')} activeOpacity={1}>
        <ImageBackground source={require('../../assets/myIcons/pazzo.jpg')} style={cardImage}/>
        <Text style={cardTitle}>Pazzo</Text>
        <View style={cardData}>
            <Note style={cardTime} title='30-40 мин.' />
            <Note style={cardCoast} title='от 500 р.' />
        </View>
    </TouchableOpacity>
    
  );
}

const { card, cardImage, cardTitle, cardData, cardTime, cardCoast } = StyleSheet.create({
  card: {
    marginBottom: 17,
    height: 180,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 19,
  },
  cardImage: {
    height: 102,
    width: 200,
  },
  cardTitle: {
    fontSize: 19,
    marginTop: 4,
  },
  cardData: {
    marginTop: 7,
    flexDirection: 'row'
  },
  cardTime: {
  },
  cardCoast: {
  }
});
