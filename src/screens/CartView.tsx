import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import CartCard from '../Components/CartCard';
import { ScrollView } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';

function CartView({store}: any) {
    const fetchFonts = () => Font.loadAsync({'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf')})

    const [dataLoaded, setDataLoaded] = useState(false)

    if (!dataLoaded) 
        return (
        <AppLoading 
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
        />)

    if (store.cart.dishes.length === 0) 
    return <View style={noDishesContainer}><Text style={noDishes}>Ваша корзина пуста!</Text></View>

    const onHandler = () => {
        store.clearCart()
        store.setCurrentRestaurantNull()
    }
    return (
      <View style={container}>
            <TouchableOpacity onPress={onHandler}>
                <Text style={clearBottom}>Очистить</Text>
            </TouchableOpacity>
            <Text style={title}>Корзина</Text>
            <ScrollView style={cards} showsVerticalScrollIndicator={ false } >
                {store.cart.dishes.map((dish: any) => <CartCard dish={dish} key={dish._id}/>)}
            </ScrollView>
            <Text style={total}>Итого: {store.cart.cartCost} р.</Text>
      </View>
    );
}

const { noDishes, noDishesContainer, container, clearBottom, title, cards, total } = StyleSheet.create({
    noDishes: {
        textAlign: 'center',
        fontFamily: "Montserrat",
        fontSize: 30,
        color: '#6D6D6D',
    },
    noDishesContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        marginHorizontal: 20,
    },
    clearBottom: {
        fontFamily: "Montserrat",
        fontWeight: "300",
        fontSize: 18,
        lineHeight: 20,
        marginTop: 17,
        textAlign: 'right'
    },
    cards: {
        height: 380,
    },
    title: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 35,   
        marginBottom: 30,
    },
    total: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: 23,   
        marginTop: 31,
        textAlign: 'right'
    },
  });

  export default inject('store')(observer(CartView))