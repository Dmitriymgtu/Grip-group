import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SwitchSelector from 'react-native-switch-selector';
import Field from './Field'

export default function OrderView() {

    const [horizontalFields] = useState([
        {id: 1, title: 'Кв/офис'},
        {id: 2, title: 'Домофон'},
        {id: 3, title: 'Подъезд'},
        {id: 4, title: 'Этаж'},
    ])

    const options = [
        {label: 'Apple Pay', value: 'Apple Pay'},
        {label: 'Карта', value: 'Карта'}
    ]
    return (
        <View style={ container }>
            <Text style={ orderTitle }>Заказ</Text>
            <Field title='Время доставки'/>
            <Field title='Адрес доставки'/>
            <View style={horizontal}>
                { horizontalFields.map(value => <Field key={value.id} title={value.title}/>)}
            </View>
            <Field title='Комментарий к заказу'/>
            <Field title='Промокод'/>
            <SwitchSelector style={ paymentMethod } 
                            options={options} 
                            initial={0} 
                            onPress={(value) => console.log(value)}
                            fontSize={19}
                            buttonColor='white'
                            backgroundColor='#DCDADA'
                            hasPadding={true}  
                            animationDuration={0}     
                            textColor='#8C7F7F'
                            height={54}
                            selectedColor='black'         
            />
        </View>
    )
}

const { container,orderTitle, horizontal, paymentMethod } = StyleSheet.create({
    container:{
        marginHorizontal: 20,
    },
    orderTitle: {
        fontSize: 35,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 36,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    paymentMethod: {
        marginTop: 15
    }
})