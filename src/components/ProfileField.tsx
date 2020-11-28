import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ProfileField: React.FC<any> = (props: any) => {
  return (
    <TouchableOpacity style={field} onPress={() => alert('Поле')} activeOpacity={1}>
        <View style={fieldRow}>
          <View style={leftField}>
            <Image source={props.path} style={fieldIcon}/>
            <Text style={fieldTitle}>{props.title}</Text>
          </View>
          <Image source={require('../assets/myIcons/rightArrow-24.png')} style={fieldArrow}/>
        </View>
        <View style={fieldLine}/>
    </TouchableOpacity>
  );
}

const { field, fieldRow, leftField, fieldIcon, fieldTitle, fieldArrow, fieldLine } = StyleSheet.create({
    field: {
      marginBottom: 20,
    },
    fieldRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    leftField: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    fieldIcon: {
      width: 24,
      height: 24,
      marginRight: 12,
    },
    fieldTitle: {
      fontSize: 21,
      fontFamily: 'Montserrat'
    },
    fieldArrow: {
      width: 24,
      height: 24,
    },
    fieldLine: {
      marginTop: 19,
      borderBottomWidth: 1,
      borderBottomColor: 'silver',
    },
});

export default ProfileField
