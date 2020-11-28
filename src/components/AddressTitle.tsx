import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Note from './Note'

const AddressTitle: React.FC = () => {

  return (
    <View style={ addressContainer }>
      <View style={ addressTitle }>
        <Text style={ addressTitleText }>На какой адрес закажете?</Text>
      </View>
      <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } >
        <Note note={{title: 'ул.Октябрьская, д.4'}}/>
        <Note note={{title: 'ул.Бригадная, д.7'}}/>
        <Note note={{title: 'девреня Бутово, д.52'}}/>
        <Note note={{title: '2-я Институтская, 4к4'}}/>
      </ScrollView>   
    </View>
    
  );
}

const { addressContainer, addressTitle, addressTitleText } = StyleSheet.create({

  addressContainer: {
    width: 371,
    marginLeft: 20,
    paddingBottom: 20,
    
  },
  addressTitle: {
    marginTop: 5,
    marginBottom: 10
  },
  addressTitleText: {
    fontSize: 24,
  }

});

export default AddressTitle
