import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View } from 'react-native';
import Main from './src/MainWindow/Main';
import Footer from './src/Footer';
import Auth from './src/AuthorizationWindow/Auth';
import ProfileWindow from './src/ProfileWindow/ProfileWindow';
import MenuWindow from './src/MenuWindow/MenuWindow';
import store from './src/store'
import {observe} from 'mobx'
import { Observer, inject, observer, useObserver, Provider } from 'mobx-react'
import OrderView from './src/OrderWindow/OrderView';
import CartView from './src/CartWindow/CartView';
import { TextInput } from 'react-native-gesture-handler';

function AppView(props: any) {
    // const [field, setField] = useState(props.store.field)

    const onClick = (val: string) => {
        // setField(val)
        props.store.setField(val)
    }

  return(
    <View style={ container }> 
        {store.componentName === 'Main' && <Main/>}
        {store.componentName === 'Restaurant' && <MenuWindow/>}
        {store.componentName === 'Cart' && <CartView/>}
        {store.componentName === 'Order' && <OrderView/>}
        {store.componentName === 'Profile' && <ProfileWindow/>}
        {/* <MenuWindow/> */}
        {/* <CartView/> */}
        <View style={footer}>
            <Footer/>
        </View>
    </View> 
  );
}

const { container, footer, field } = StyleSheet.create({
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
  },
  foor: {
      flex: 1,
  },
  field: {
      borderWidth: 2,
      borderColor: 'black'
  }
});

export default inject('store')(observer(AppView))
