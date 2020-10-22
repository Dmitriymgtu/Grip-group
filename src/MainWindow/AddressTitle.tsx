import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Note from '../../src/Note'

export default function AddressTitle() {

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
    <View style={ addressContainer }>
      <View style={ addressTitle }>
        <Text style={ addressTitleText }>На какой адрес закажете?</Text>
      </View>
      <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } >
        <Note title='ул.Октябрьская, д.4'/>
        <Note title='ул.Бригадная, д.7'/>
        <Note title='девреня Бутово, д.52'/>
        <Note title='2-я Институтская, 4к4'/>
      </ScrollView>   
    </View>
    
  );
}

const { addressContainer, addressTitle, addressTitleText } = StyleSheet.create({

  addressContainer: {
    width: 371,
    marginLeft: 20,
    paddingBottom: 20,
    
  },
  addressTitle: {
    marginTop: 5,
    marginBottom: 10
  },
  addressTitleText: {
    fontSize: 24,
  }

});
