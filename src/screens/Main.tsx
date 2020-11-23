import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AddressTitle from '../Components/AddressTitle'
import RestaurantCard from '../Components/RestaurantCard'
import { YellowBox } from 'react-native';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';


function Main(props: any) {
  YellowBox.ignoreWarnings(['Remote debugger']);
  return (
    <>
      <AddressTitle/>
      <ScrollView style={scroll} showsVerticalScrollIndicator={false}>
        {props.store.restaurants.map((restaurant: any, index: number) => <RestaurantCard key={restaurant._id} restaurant={restaurant} setComponent={props.setComponent}/>)}
      </ScrollView>
    </>
    
  );
}

const { scroll } = StyleSheet.create({
  scroll: {
  }
});

export default inject('store')(observer(Main))