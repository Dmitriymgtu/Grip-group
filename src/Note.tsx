import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';


function Note(props: any) {

  const fetchFonts = () => Font.loadAsync({'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf')})

  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) 
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )

  const onClick = () => {
    if (props.note.dishX)
      props.store.setScroll({x: props.note.dishX, y: props.note.dishY})
    else {
      props.store.setOrderField('Адрес доставки', props.note.title)
    }
  }

  return (
    <View style={ sizeNote }>
      {!(props.note.title.includes('р.') || props.note.title.includes('мин.'))
      ? 
      <TouchableOpacity onPress={() => onClick()}>
        <Text style={ note }>{props.note.title}</Text>
      </TouchableOpacity>
      :
      <Text style={ note }>{props.note.title}</Text>
      }
    </View>
    
  );
}

const { note, sizeNote } = StyleSheet.create({

  note: {
    textAlign: 'center',
    paddingTop: 6,
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


export default inject('store')(observer(Note))