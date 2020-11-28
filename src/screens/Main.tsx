import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AddressTitle from '../components/AddressTitle'
import RestaurantCard from '../components/RestaurantCard'
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';


const Main: React.FC<any> = (props: any) => {

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
