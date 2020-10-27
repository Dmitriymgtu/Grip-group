import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Field({ title }: any) {
    const [field, setField] = useState('')
    return (
        <View style={ container }>
            <Text style={fieldTitle}>{title}</Text>
            <TextInput 
            style={ fieldInput }
            onChangeText={(text: string) => setField(text)}
            value={ field }
            />
        </View>
    )
}

const { container, fieldTitle, fieldInput} = StyleSheet.create({
    container:{
        marginBottom: 31
    },
    fieldTitle: {
        color: '#6D6D6D',
        fontSize: 12,
        lineHeight: 14,
    },
    fieldInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#6D6D6D',
        height: 26,
        minWidth: 64
    },
})