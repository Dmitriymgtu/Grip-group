import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';

function CartCard(props: any) {
    const [counter, setCounter] = useState(props.dish.count | 0)
    const fetchFonts = () => Font.loadAsync({'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf')})

    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
      props.store.setDishCount(props.dish, counter)
      props.store.setCart(props.dish, counter)
    }, [counter])

    if (!dataLoaded) 
        return (
        <AppLoading 
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
        />)

    return (
      <View style={dish}>
        <Image source={require('../assets/myIcons/pazzo.jpg')} style={dishImage}/>
        <View style={dishInfo}>
          <View style={dishTitle}>
              <Text style={font16}>
                  {props.dish.title}
              </Text>
              <Text style={font16}>
                {props.dish.cost + ' р.'}
              </Text>
          </View>
          <View style={dishCounter}>
            <View style={dishIncrease}>
              <TouchableOpacity onPress={() => setCounter(prev => prev - 1)} disabled={ counter <= 0 }>
                <Text style={textCenter}>-</Text>
              </TouchableOpacity>
            </View>
            <Text style={font19}>{counter}</Text>
            <View style={dishIncrease}>
              <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}>
                <Text style={textCenter}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
}

const { dish, dishImage, dishInfo, dishTitle, font16, textCenter, dishIncrease, font19, dishCounter } = StyleSheet.create({
    dish: {
      marginBottom: 20,
      height: 80,
      flexDirection: 'row',
      // shadowColor: "#000",
      // backgroundColor: 'white',
      // borderRadius: 5,

      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 3.84,

      // elevation: 5,
    },
    dishImage: {
      height: 80,
      width: 80,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'black'
    },
    dishInfo: {
      marginLeft: 26,
      flex: 1,
      justifyContent: 'space-between',
    },
    dishTitle: {
      fontSize: 22,
      marginBottom: 21,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontFamily: 'Montserrat'
    },
    font16: {
      fontSize: 16, 
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
    font19: {
      fontSize: 19,
      paddingHorizontal: 10,
    },
    dishCounter: {
      flexDirection: 'row',
      width: 105,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });

  export default inject('store')(observer(CartCard))
