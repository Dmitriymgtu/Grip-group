import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer, inject } from 'mobx-react';

function Footer(props: any) {

  const fetchFonts = () => Font.loadAsync({'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf')})

  const [dataLoaded, setDataLoaded] = useState(false)
  useEffect(() => {
    console.log('FOOTER:', props.store)
  }, [props.store])
  if (!dataLoaded) 
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => props.store.setComponent('Main')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/eatIcon-32px.png')}/>
        <Text style={styles.text}>Главное</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => props.store.setComponent('Cart')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/cartIcon-32px.png')}/>
        <Text style={styles.text}>Корзина</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => props.store.setComponent('Order')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/orderIcon-32px.png')}/>
        <Text style={styles.text}>Заказ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={ () => props.store.setComponent('Profile')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/profileIcon-32px.png')}/>
        <Text style={styles.text}>Профиль</Text>
      </TouchableOpacity>      
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: "space-between",
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#716D6D'
  },
  image: {
    height: 32,
    width: 32,
  },
  footerButton: {
    height: 52,
    marginTop: 6,
    alignItems: "center",
    
    justifyContent: 'space-between'
  },
  text: {
  }
});

export default inject('store')(observer(Footer))