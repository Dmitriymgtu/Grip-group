import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { observer, inject} from 'mobx-react';

function Footer(props: any) {

  const { store, component, setComponent } = props
  const fetchFonts = () => Font.loadAsync({'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf')})

  const [dataLoaded, setDataLoaded] = useState(false)
  
  if (!dataLoaded) 
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )

    const setUser = () => {
      if (store.user) 
        setComponent('Profile')
      else
        setComponent('Auth-number')
    } 

  
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={{...styles.footerButton}} onPress={() => setComponent('Main')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../../assets/footerIcons/eatIcon-32px.png')}/>
        <Text style={component === 'Main' ? styles.activeButton : styles.passiveButton}>Главное</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => setComponent('Cart')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../../assets/footerIcons/cartIcon-32px.png')}/>
        {store.cartCount !== 0 && <View style={styles.cartView}>
          <Text style={styles.cartCount}>{store.cartCount}</Text>
        </View>}
        <Text style={component === 'Cart' ? styles.activeButton : styles.passiveButton}>Корзина</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => setComponent('Order')} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../../assets/footerIcons/orderIcon-32px.png')}/>
        <Text style={component === 'Order' ? styles.activeButton : styles.passiveButton}>Заказ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={setUser} activeOpacity={1}>
        <ImageBackground style={styles.image} source={require('../../assets/footerIcons/profileIcon-32px.png')}/>
        <Text style={component === 'Profile' || component === 'Auth-number' || component === 'Auth-sms' ? styles.activeButton : styles.passiveButton}>Профиль</Text>
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
    top: 0,
    backgroundColor: '#00B737',
    height: 20,
    width: 'auto',
    minWidth: 20,
    borderRadius: 20,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 1,
    paddingLeft: 2,
    fontWeight: '600',
    color: 'white',
  },
  cartCount: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
  }
});

export default inject('store')(observer(Footer))