import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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

  const onClick = (text: any) => {
    if (props.title.includes('р.')) return
  }

  return (
    <View style={ sizeNote }>
      {!(props.title.includes('р.') || props.title.includes('мин.'))
      ? 
      <TouchableOpacity onPress={(text: any) => onClick(text)}>
        <Text style={ note }>{props.title}</Text>
      </TouchableOpacity>
      :
      <Text style={ note }>{props.title}</Text>
      }
    </View>
    
  );
}

const { note, sizeNote } = StyleSheet.create({

  note: {
    textAlign: 'center',
    paddingTop: 4,
    paddingHorizontal: 20,
    fontFamily: 'Montserrat'
  },
  sizeNote: {
    marginRight: 20,
    backgroundColor: '#E8E8E8',
    height: 30,
    borderRadius: 16,
  }
});
