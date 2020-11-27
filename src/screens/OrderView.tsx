import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Keyboard} from 'react-native'
import SwitchSelector from 'react-native-switch-selector';
import { observer, inject } from 'mobx-react';
import Field from '../Components/Field'

const OrderView: React.FC = ({store}:any) => {

    const [horizontalFields] = useState([
        {id: 1, title: 'Кв/офис', value: store.order['Кв/офис']},
        {id: 2, title: 'Домофон', value: store.order['Домофон']},
        {id: 3, title: 'Подъезд', value: store.order['Подъезд']},
        {id: 4, title: 'Этаж', value: store.order['Этаж']},
    ])

    const options = [
        {label: 'Apple Pay', value: 'Apple Pay'},
        {label: 'Карта', value: 'Карта'}
    ]

    return (
        <ScrollView onScroll={Keyboard.dismiss} showsVerticalScrollIndicator={false}>
            <View style={ container }>
                <Text style={ orderTitle }>Заказ</Text>
                <Field title='Время доставки' value={store.order['Время доставки']}/>
                <Field title='Адрес доставки' value={store.order['Адрес доставки']}/>
                <View style={horizontal}>
                    { horizontalFields.map(value => <Field key={value.id} title={value.title} value={value.value} />)}
                </View>
                <Field title='Комментарий к заказу' value={store.order['Комментарий к заказу']}/>
                <Field title='Промокод' value={store.order['Промокод']}/>
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
        </ScrollView>
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

export default inject('store')(observer(OrderView))
