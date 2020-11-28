import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { AppLoading } from 'expo'
import Note from './Note'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'

const DishCard: React.FC<any> = (props: any) => {
    const [counter, setCounter] = useState(props.dish.count | 0)

    useEffect(() => {
      props.store.setDishCount(props.dish, counter)
      props.store.setCart(props.dish, counter)
    }, [counter])

    const confirm = () =>
    Alert.alert(
      "Очистить корзину?",
      "Все ранее выбранные товары будут удалены",
      [
        {
          text: "Нет",
          style: "cancel"
        },
        { 
          text: "Да", 
          onPress: () => {
            props.store.clearPreviousRestaurant()
            setCounter(prev => prev + 1)
            props.store.clearCart()
          }
        }
      ],
      { cancelable: false }
    );

    const onHandler = (): void => {
      if (props.store.previousRestaurant && props.store.previousRestaurant.name !== props.store.currentRestaurant.name) 
        confirm()
      else setCounter(prev => prev + 1)
    }

    const setDishes = (event: any): void => {
      props.store.setDishesWithLayouts({_id: props.dish._id, section: props.dish.section, ...event.nativeEvent.layout})
    }
    return (
        <TouchableOpacity style={dish} onPress={() => alert(props.dish.description)} onLayout={setDishes}>
            <Image source={require('../assets/myIcons/pazzo.jpg')} style={dishImage}/>
            <View style={dishInfo}>
              <Text style={dishTitle}>{props.dish.title}</Text>
              <View style={dishRow}>
                <Note style={dishPrice} note={{title: props.dish.cost + ' р.'}}/>
                <View style={dishCounter}>
                  {counter !== 0 && <View style={dishIncrease}>
                    <TouchableOpacity onPress={() => setCounter(prev => prev - 1)} disabled={ counter <= 0 }>
                      <Text style={textCenter}>-</Text>
                    </TouchableOpacity>
                  </View>}
                  {counter !== 0 && <Text style={font19}>{counter}</Text>}
                  <View style={dishIncrease}>
                    <TouchableOpacity onPress={onHandler}>
                      <Text style={textCenter}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
        </TouchableOpacity>
    );
}

const { dish, dishImage, dishInfo, dishTitle, dishComposition, dishRow, dishPrice, font19, dishIncrease, textCenter, dishCounter } = StyleSheet.create({
    dish: {
      marginBottom: 18,
      marginTop: 10,
      height: 140,
      padding: 10, 
      flexDirection: 'row',
      alignItems: "center",
      borderRadius: 10,
      marginHorizontal: 20,
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    dishImage: {
      height: 110,
      width: 110,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'silver'
    },
    dishInfo: {
      marginLeft: 14,
      flex: 1,
      height: 140,
      justifyContent: 'space-between' 
    },
    dishTitle: {
      fontSize: 18,
      marginTop: 15,
      lineHeight: 18,
      color: 'black',
      fontWeight: '600',
      fontFamily: 'Montserrat'
    },
    dishComposition: {
      marginBottom: 6,
      fontSize: 15,
      height: 40,
      fontFamily: 'Montserrat'
    },
    dishRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    dishPrice: {
    },
    font19: {
      fontSize: 19, 
      paddingHorizontal: 10,
    },
    dishIncrease: {
      height: 30,
      width: 30,
      borderRadius: 8,
      fontSize: 19,
      backgroundColor: '#E8E8E8' 
    },
    textCenter: {
      textAlign: 'center',
      paddingTop: 5,
    },
    dishCounter: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  });

  export default inject('store')(observer(DishCard))
