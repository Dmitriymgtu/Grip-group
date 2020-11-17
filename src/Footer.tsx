import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer, inject} from 'mobx-react';
import { Store } from './store/store';

function Footer(props: any) {

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
      <TouchableOpacity style={{...styles.footerButton}} onPress={() => props.setComponent('Main')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/eatIcon-32px.png')}/>
        <Text style={props.component === 'Main' ? styles.activeButton : styles.passiveButton}>Главное</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => props.setComponent('Cart')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/cartIcon-32px.png')}/>
        {props.store.cartCount !== 0 && <View style={styles.cartView}>
          <Text style={styles.cartCount}>{props.store.cartCount}</Text>
        </View>}
        <Text style={props.component === 'Cart' ? styles.activeButton : styles.passiveButton}>Корзина</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => props.setComponent('Order')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/orderIcon-32px.png')}/>
        <Text style={props.component === 'Order' ? styles.activeButton : styles.passiveButton}>Заказ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={ () => props.setComponent('Profile')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../assets/footerIcons/profileIcon-32px.png')}/>
        <Text style={props.store.component === 'Profile' ? styles.activeButton : styles.passiveButton}>Профиль</Text>
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
  },
  cartView: {
    position: 'absolute',
    left: 44,
    backgroundColor: '#00B737',
    height: 25,
    width: 'auto',
    minWidth: 25,
    borderRadius: 20,
    bottom: 28,
    fontSize: 20,
    // paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 7,
    paddingBottom: 1,
    fontWeight: '600',
    color: 'white',
  },
  cartCount: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  }
});

export default inject('store')(observer(Footer))