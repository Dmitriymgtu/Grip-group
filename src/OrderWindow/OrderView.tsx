import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Field from './Field'

export default function OrderView() {
    return (
        <View>
            <Text>Заказ</Text>
            <Field/>
            <Field/>
            <View style={horizontalFields}>
                <Field/>
                <Field/>
                <Field/>
                <Field/>
            </View>
            <Field/>
            <Field/>
            <Swipeable/>
        </View>
    )
}

const {horizontalFields} = StyleSheet.create({
    horizontalFields: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})