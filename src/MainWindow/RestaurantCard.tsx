import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {inject, observer} from 'mobx-react'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from '../Note'

function RestaurantCard(props: any) {

  const fetchFonts = () => Font.loadAsync({'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf')})

  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) 
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )

  function onHandler() {
    props.store.setComponent('Restaurant')
    props.store.setRestaurant(props.restaurant)
  }

  return (
    <TouchableOpacity style={card} onPress={() => onHandler()} activeOpacity={1}>
        <ImageBackground source={require('../../assets/myIcons/pazzo.jpg')} style={cardImage}/>
        <Text style={cardTitle}>{props.restaurant.name}</Text>
        <View style={cardData}>
            <Note style={cardTime} title={props.restaurant.deliveryTime} />
            <Note style={cardCoast} title={'от ' + props.restaurant.deliveryCost + 'р.'} />
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

export default inject('store')(observer(RestaurantCard))