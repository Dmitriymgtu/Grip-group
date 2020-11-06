import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer, inject } from 'mobx-react';

function Footer({store}: any) {

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
    <View style={styles.footer}>
      <TouchableOpacity style={{...styles.footerButton}} onPress={() => store.setComponent('Main')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/eatIcon-32px.png')}/>
        <Text style={store.componentName === 'Main' ? styles.activeButton : styles.passiveButton}>Главное</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => store.setComponent('Cart')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/cartIcon-32px.png')}/>
        <Text style={store.componentName === 'Cart' ? styles.activeButton : styles.passiveButton}>Корзина</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => store.setComponent('Order')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/orderIcon-32px.png')}/>
        <Text style={store.componentName === 'Order' ? styles.activeButton : styles.passiveButton}>Заказ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={ () => store.setComponent('Profile')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/profileIcon-32px.png')}/>
        <Text style={store.componentName === 'Profile' ? styles.activeButton : styles.passiveButton}>Профиль</Text>
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
    borderTopColor: '#716D6D',
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
  passiveButton: {
    color: '#6D6D6D'
  },
  activeButton: {
    color: 'black'
  }
});

export default inject('store')(observer(Footer))