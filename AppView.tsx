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
  useEffect(() => {
    console.log('useEffect:', props.store)
  }, [props.store])
  return(
    <View style={ container }> 
        {/* {store.componentName === 'Main' && <Main/>} */}
        {/* {store.component === 'Cart' && <Cart/>} */}
        {/* <Main/> */}
        {/* <ProfileWindow/> */}
        {/* <MenuWindow/> */}
        {/* <CartView/> */}
        {/* <View style={footer}>
            <Footer/>
        </View>
        <TouchableWithoutFeedback onPress={ () => console.log(props.store)}>
            <Text style={foor}>{props.store.componentName}</Text>
        </TouchableWithoutFeedback> */}
        <Text>{props.store.field}</Text>
        <Text>{props.store.componentName}</Text>
        <TouchableWithoutFeedback onPress={() => props.store.setComponent('Profile')}><Text>Profile</Text></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => props.store.setComponent('Cart')}><Text>Cart</Text></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => props.store.setComponent('Main')}><Text>Main</Text></TouchableWithoutFeedback>
        <TextInput style={field} value={props.store.field} onChangeText={(val: string) => onClick(val)}/>
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
