import React, { useState } from 'react';
import { View , StyleSheet, ScrollView} from 'react-native'
import Note from '../Note'
import DishCard from './DishCard'
import StockCard from './StockCard'

export default function MenuWindow() {
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
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
                <DishCard/>
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
        flex: 1,
        marginHorizontal: 20,
    },
    stocks: {
        flexDirection: 'row',
        marginTop: 12,
        height: 115,
    },
    notes: {
        marginTop: 20,
        height: 45,
        flexDirection: 'row',
        marginBottom: 15,
    },
    cards: {
    }
})