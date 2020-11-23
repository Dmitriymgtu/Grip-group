import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {inject, observer} from 'mobx-react'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from './Note'

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
    props.setComponent('Restaurant')
    props.store.setRestaurant(props.restaurant)
    if (props.store.cart.dishes.length === 0) {
      props.store.clearPreviousRestaurant()
    }
  }

  return (
    <TouchableOpacity style={card} onPress={() => onHandler()} activeOpacity={1}>
        <ImageBackground source={require('../../assets/myIcons/pazzo.jpg')} style={cardImage}/>
        <View>
          <Text style={cardTitle}>{props.restaurant.name}</Text>
          <View style={cardData}>
              <Note note={{title: props.restaurant.deliveryTime}} />
              <Note note={{title: 'от ' + props.restaurant.deliveryCost + 'р.'}} />
          </View>
        </View>
    </TouchableOpacity>
    
  );
}

const { card, cardImage, cardTitle, cardData } = StyleSheet.create({
  card: {
    marginBottom: 17,
    height: 210,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 25,
    borderColor: 'silver',
    borderWidth: 1,
    backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  cardImage: {
    marginTop: 25,
    height: 95,
    borderRadius: 25,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
    marginLeft: 20,
  },
  cardData: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row'
  }
});

export default inject('store')(observer(RestaurantCard))