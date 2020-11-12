import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native'
import { Store } from '../store/store'
import OrderView from './OrderView'


function Field(props: any) {
    const [field, setField] = useState(props.value)

    const titleType = ['Кв/офис', 'Домофон', 'Подъезд', 'Этаж']
    
    useEffect(() => {
        props.store.setOrderField(props.title, field)
    }, [field])
    return (
        <View style={ container }>
            <Text style={fieldTitle}>{props.title}</Text>
            <TextInput 
            style={ fieldInput }
            onChangeText={setField}
            value={ field }
            keyboardType={titleType.includes(props.title) ? 'numeric' : 'default'}
            autoCorrect={false}
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

export default inject('store')(observer(Field))