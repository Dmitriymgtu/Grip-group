import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View } from 'react-native';
import Main from './src/MainWindow/Main';
import Footer from './src/Footer';
import Auth from './src/AuthorizationWindow/Auth';
import ProfileWindow from './src/ProfileWindow/ProfileWindow';
import MenuWindow from './src/MenuWindow/MenuWindow';
import store from './src/store/store'
import {observe} from 'mobx'
import { Observer, inject, observer, useObserver, Provider } from 'mobx-react'
import OrderView from './src/OrderWindow/OrderView';
import CartView from './src/CartWindow/CartView';
import { TextInput } from 'react-native-gesture-handler';
import Alert from './src/Alert';

type Component = 'Main' | 'Profile' | 'Restaurant' | 'Cart' | 'Order'

function AppView(props: any) {
    // const [field, setField] = useState(props.store.field)

  const onClick = (val: string) => {
      // setField(val)
      props.store.setField(val)
  }

  const [component, setComponent] = useState('Main')

  return(
    <View style={ container }> 
        {component === 'Main' && <Main setComponent={setComponent}/>}
        {component === 'Restaurant' && <MenuWindow setComponent={setComponent}/>}
        {component === 'Cart' && <CartView/>}
        {component === 'Order' && <OrderView/>}
        {component === 'Profile' && <ProfileWindow/>}
        {/* <MenuWindow/> */}
        {/* <CartView/> */}
        {component !== 'Restaurant' && <View style={footer}>
            <Footer setComponent={setComponent} component={component}/>
        </View>}
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
  field: {
      borderWidth: 2,
      borderColor: 'black'
  }
});

export default inject('store')(observer(AppView))
