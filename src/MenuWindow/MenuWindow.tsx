import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { View , StyleSheet, ScrollView} from 'react-native'
import Note from '../Note'
import DishCard from './DishCard'
import StockCard from './StockCard'

function MenuWindow({store}: any) {

    console.log(store.getNotes())
    return (
        <View style={ container }>
            <ScrollView style={stocks} horizontal={ true } showsHorizontalScrollIndicator={ false }>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/> 
            </ScrollView>
            <ScrollView style={notes} horizontal={ true } showsHorizontalScrollIndicator={ false } >
                {store.getNotes().map((value: string, index: number) => <Note title={value} key={index}/>)}
            </ScrollView> 
            <ScrollView style={cards} showsVerticalScrollIndicator={ false }>
                {store.currentRestaurant.dishes.map((dish: any, index: number) => <DishCard dish={dish} key={index}/>)}
            </ScrollView>
        </View>
    )
}

const { container, stocks, notes, cards } = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
    },
    stocks: {
        // flexDirection: 'row',
        marginBottom: 20,
        marginTop: 12,
        height: 115,
    },
    notes: {
        height: 45,
        // flexDirection: 'row',
        marginBottom: 15,
    },
    cards: {
        
    }
})

export default inject('store')(observer(MenuWindow))