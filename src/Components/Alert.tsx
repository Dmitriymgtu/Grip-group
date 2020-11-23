import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

function Alert(props: any) {

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
    <View style={ container }>
        <View style={ wrapper }>
            {props.children}
        </View>
    </View>
  );
}

const { container, wrapper } = StyleSheet.create({
    container: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: 'gray'
    },
    wrapper: {
        height: 180,
        width: 250,
        borderWidth: 1,
        borderRadius: 5,

    }
});

export default Alert