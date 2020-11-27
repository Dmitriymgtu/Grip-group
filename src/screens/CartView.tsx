import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CartCard from '../Components/CartCard';
import { ScrollView } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';

function CartView({store}: any) {

    if (store.cart.dishes.length === 0) 
        return (<View style={noDishesContainer}>
                    <Text style={noDishes}>Ваша корзина пуста!</Text>
                </View>)

    const onHandler = () => {
        store.clearCart()
        store.setCurrentRestaurantNull()
    }
    return (
      <View style={container}>
            <TouchableOpacity onPress={onHandler}>
                <Text style={clearButton}>Очистить</Text>
            </TouchableOpacity>
            <Text style={title}>Корзина</Text>
            <ScrollView style={cards} showsVerticalScrollIndicator={ false } >
                {store.cart.dishes.map((dish: any) => <CartCard dish={dish} key={dish._id}/>)}
            </ScrollView>
            <Text style={total}>Итого: {store.cart.cartCost} р.</Text>
      </View>
    );
}

const { noDishes, noDishesContainer, container, clearButton, title, cards, total } = StyleSheet.create({
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
    clearButton: {
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