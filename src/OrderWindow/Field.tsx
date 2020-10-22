import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Field() {
    const [field, setField] = useState('')
    return (
        <View>
            <Text style={fieldTitle}></Text>
            <TextInput 
            style={ fieldInput }
            onChangeText={(text: string) => setField(text)}
            value={ field }
            />
        </View>
    )
}

const { fieldTitle, fieldInput} = StyleSheet.create({
    fieldTitle: {
        color: '6D6D6D',
        fontSize: 12,
        lineHeight: 14,
    },
    fieldInput: {
        borderBottomWidth: 1,
        borderBottomColor: '6D6D6D',
        height: 26,
    },
})