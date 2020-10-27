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

export default function App() {

  const store = useContext(storeContext)
  YellowBox.ignoreWarnings(['Remote debugger']);

  return(
    <Observer>{ () => <View style={ container }>
        {/* {store.componentName === 'Main' && <Main/>} */}
        {/* {store.component === 'Cart' && <Cart/>} */}
        {/* <ProfileWindow/> */}
        {/* <MenuWindow/> */}
        <OrderView/>
        <Footer/>
      </View> 
    }</Observer>
  );
}

const { container } = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }
});
