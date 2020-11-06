import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { View , StyleSheet, ScrollView} from 'react-native'
import Note from '../Note'
import DishCard from './DishCard'
import StockCard from './StockCard'

function MenuWindow({store}: any) {
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
                <Note title='Пицца'/>
                <Note title='Роллы'/>
                <Note title='Бургеры'/>
                <Note title='Супы'/>
                <Note title='Вторые блюда'/>
                <Note title='Напитки'/>
            </ScrollView> 
            <ScrollView style={cards} showsVerticalScrollIndicator={ false }>
                {/* {store.dishes.map((dish: any, index: number) => <DishCard dish={dish} key={index}/>)} */}
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>

                <DishCard/>
                <DishCard/>
                <DishCard/>
            </ScrollView>
        </View>
    )
}

const { container, stocks, notes, cards } = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1
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
        borderWidth: 2,
    }
})

export default inject('store')(observer(MenuWindow))