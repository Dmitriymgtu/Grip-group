import { inject, observer, PropTypes } from 'mobx-react';
import React, { useState } from 'react';
import { View , StyleSheet, ScrollView, Text, TouchableOpacity, Image} from 'react-native'
import Note from '../Note'
import DishCard from './DishCard'
import StockCard from './StockCard'
import {Store} from '../store/store'

function MenuWindow({store, setComponent}: any) {

    return (
        <View style={ container }>
            {/* <ScrollView style={stocks} horizontal={ true } showsHorizontalScrollIndicator={ false }>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/> 
            </ScrollView> */}
            <View style={title}>
                <TouchableOpacity onPress={() => setComponent('Main')}>
                    <Image style={titleButtonBack} source={require('../../assets/myIcons/back.png')}/>
                </TouchableOpacity>
                <Text style={titleText}>{store.currentRestaurant.name}</Text>
                <TouchableOpacity onPress={() => setComponent('Cart')}>
                    <Image style={titleButtonCart} source={require('../../assets/myIcons/cart-28.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={notes} horizontal={ true } showsHorizontalScrollIndicator={ false } >
                {store.notes.map((value: any) => <Note title={value.value} key={value._id}/>)}
            </ScrollView> 
            <ScrollView style={cards} showsVerticalScrollIndicator={ false }>
                {store.dishes.map((dish: any, index: number) => <DishCard dish={dish} key={index}/>)}
            </ScrollView>
        </View>
    )
}

const { container, title, titleButtonBack, titleText, titleButtonCart, stocks, notes, cards } = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        height: 30,
        alignItems: 'center',
        marginBottom: 20,
    },
    titleButtonBack: {
        height: 28,
        width: 28,

    },
    titleText: {
        color: '#333333',
        fontSize: 28,
        fontWeight: '600',
    },
    titleButtonCart: {

    },
    stocks: {
        // flexDirection: 'row',
        marginBottom: 20,
        marginHorizontal: 20,
        marginTop: 12,
        height: 115,
    },
    notes: {
        height: 45,
        marginHorizontal: 20,
        // flexDirection: 'row',

    },
    cards: {
        
    }
})

export default inject('store')(observer(MenuWindow))