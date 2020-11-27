import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileField from '../Components/ProfileField'

export default function ProfileWindow() {

  const fields = [
      {id: 1, title: 'Мои заказы', path: require('../assets/myIcons/myOrders.png')},
      {id: 2, title: 'Мои данные', path: require('../assets/myIcons/myData.png')},
  ]  
  return (
    <View style={ container } >
        <Text style={ profileName }>Дмитрий</Text>
        {fields.map(value => <ProfileField key={value.id} title={value.title} path={value.path} />)}
    </View>
  );
}

const { container, profileName } = StyleSheet.create({
    container: {
      marginTop: 36,
      marginHorizontal: 20
    },
    profileName: {
      fontSize: 35,
      marginBottom: 53
    }
});
