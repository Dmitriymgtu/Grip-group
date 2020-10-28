import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native';
import Main from './src/MainWindow/Main';
import Footer from './src/Footer';
import Auth from './src/AuthorizationWindow/Auth';
import ProfileWindow from './src/ProfileWindow/ProfileWindow';
import MenuWindow from './src/MenuWindow/MenuWindow';
import { storeContext } from './src/store';
import { Observer, observer, useObserver } from 'mobx-react-lite'
import OrderView from './src/OrderWindow/OrderView';
import CartView from './src/CartWindow/CartView';

export default function App() {

  const store = useContext(storeContext)
  YellowBox.ignoreWarnings(['Remote debugger']);

  return(
    <Observer>{ () => <View style={ container }>
        {/* {store.componentName === 'Main' && <Main/>} */}
        {/* {store.component === 'Cart' && <Cart/>} */}
        {/* <Main/> */}
        <ProfileWindow/>
        {/* <MenuWindow/> */}
        {/* <CartView/> */}
        <View style={footer}>
          <Footer/>
        </View>
      </View> 
    }</Observer>
  );
}

const { container, footer } = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  footer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
  }
});
