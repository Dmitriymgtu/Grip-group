import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/MainWindow/Main';
import Footer from './src/Footer';
import ProfileWindow from './src/ProfileWindow/ProfileWindow';
import MenuWindow from './src/MenuWindow/MenuWindow';
import { inject, observer } from 'mobx-react'
import OrderView from './src/OrderWindow/OrderView';
import CartView from './src/CartWindow/CartView';
import AuthSms from './src/AuthorizationWindow/AuthSms';
import AuthNumber from './src/AuthorizationWindow/AuthNumber';

function AppView(props: any) {

  const [component, setComponent] = useState('Main')
  
  useEffect(() => {
    if (component !== 'Order') setComponent('Order')
  }, [props.store.order['Адрес доставки']])

  useEffect(() => {
    setComponent('Main')
  }, [])

  return(
    <View style={ container }> 
        {component === 'Main' && <Main setComponent={setComponent}/>}
        {component === 'Restaurant' && <MenuWindow setComponent={setComponent}/>}
        {component === 'Cart' && <CartView/>}
        {component === 'Order' && <OrderView/>}
        {component === 'Profile' && <ProfileWindow/>}
        {component === 'Auth-number' && <AuthNumber setComponent={setComponent}/>}
        {component === 'Auth-sms' && <AuthSms/>}
        {component !== 'Restaurant' && <View style={footer}>
            <Footer setComponent={setComponent} component={component}/>
        </View>}
    </View> 
    
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
  },
  field: {
      borderWidth: 2,
      borderColor: 'black'
  }
});

export default inject('store')(observer(AppView))
