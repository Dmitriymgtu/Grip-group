import { inject, observer } from 'mobx-react';
import React from 'react';
import { View , StyleSheet, ScrollView, Text, TouchableOpacity, Image} from 'react-native'
import Note from '../Components/Note'
import DishCard from '../Components/DishCard'

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
                    <Image style={titleButtonBack} source={require('../assets/myIcons/back.png')}/>
                </TouchableOpacity>
                <Text style={titleText}>{store.currentRestaurant.name}</Text>
                <TouchableOpacity onPress={() => setComponent('Cart')}>
                    <Image source={require('../assets/myIcons/cart-28.png')}/>
                    {
                    store.cartCount !== 0
                     && 
                    <View style={cartView}>
                        <Text style={cartCount}>{store.cartCount}</Text>
                    </View>
                    }
                </TouchableOpacity>
            </View>
            <ScrollView style={notes} horizontal={ true } showsHorizontalScrollIndicator={ false } >
                {store.notes.map((value: any) => <Note note={value} key={value._id}/>)}
            </ScrollView> 
            <ScrollView showsVerticalScrollIndicator={ false } ref={ (ref) => store.setScrollRef(ref)}>
                {store.dishes.map((dish: any) => <DishCard dish={dish} key={dish._id}/>)}
            </ScrollView>
        </View>
    )
}

const { container, title, titleButtonBack, cartView, cartCount, titleText, notes } = StyleSheet.create({
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
    cartView: {
        position: 'absolute',
        backgroundColor: '#00B737',
        height: 20,
        width: 'auto',
        minWidth: 20,
        right: 23,
        bottom: 15,
        borderRadius: 20,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 1,
        fontWeight: '600',
        color: 'white',
    },
    cartCount: {
        fontSize: 10,
        fontWeight: '600',
        color: 'white',
    },
    titleText: {
        color: '#333333',
        fontSize: 28,
        fontWeight: '600',
    },
    stocks: {
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 12,
        height: 115,
    },
    notes: {
        height: 45,
        paddingLeft: 20,
    }
})

export default inject('store')(observer(MenuWindow))
