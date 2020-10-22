import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default function Note(props: any) {

  const fetchFonts = () => Font.loadAsync({'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf')})

  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) 
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )

  return (
    <View style={ sizeNote }>
      <Text style={ note }>{props.title}</Text>        
    </View>
    
  );
}

const { note, sizeNote } = StyleSheet.create({

  note: {
    backgroundColor: '#E8E8E8',
    height: 30,
    borderRadius: 16,
    textAlign: 'center',
    paddingTop: 4,
    paddingHorizontal: 20,
    marginRight: 20,
    fontFamily: 'Montserrat'
  },
  sizeNote: {
  }
});
