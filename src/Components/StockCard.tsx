import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function StockCard() {

    return (
        <TouchableOpacity style={stock} onPress={() => alert('Акция')} activeOpacity={1}>
            <Text style={stockText}>Акция</Text>
        </TouchableOpacity>
    );
}

const { stock, stockText } = StyleSheet.create({
    stock: {
        marginRight: 21,
        borderWidth: 1,
        borderColor: 'black',
        width: 152,
        height: 81,
        borderRadius: 20,
    },
    stockText: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 27,
    }
});
