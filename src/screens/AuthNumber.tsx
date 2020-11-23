import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default function AuthNumber(props: any) {
  const [phone, setPhone] = useState('')

  function handlePhone(string: string): void { // +7 (xxx) xxx-xx-xx
    const phnLength: number = phone.length
    const strLength: number = string.length
    
    if (strLength > phnLength) {
      const key: string = string[strLength - 1]
      
      if (0 <= Number(key) && Number(key) <= 9) {
        if (!phone)
          setPhone(`+7 (${key}`)
        else if (phnLength <= 6)
          setPhone(phone + `${key}` + (phnLength === 6 ? ') ' : ''))
        else if (phnLength === 7)
          setPhone(phone + ') ' + `${key}`)
        else if (9 <= phnLength && phnLength <= 11)
          setPhone(phone + `${key}` + (phnLength === 11 ? '-' : ''))
        else if (phnLength === 12 || phnLength === 15)
          setPhone(phone + '-' + `${key}`)
        else if (13 <= phnLength && phnLength <= 14)
          setPhone(phone + `${key}` +( phnLength === 14 ? '-' : ''))
        else if (16 <= phnLength && phnLength <= 17)
          setPhone(phone + `${key}`)
      }
      
    } else if (strLength < phnLength) {
      const phnLength: number = phone.length
      let value: string
      
      if (phnLength === 17 || phnLength === 16 || phnLength === 14 || phnLength === 13)
        value = phone.slice(0, phnLength - 2)
      else if (phnLength === 10 || phnLength === 9)
        value = phone.slice(0, phnLength - 3)
      else if (phnLength === 5)
        value = ''
      else value = phone.slice(0, phnLength - 1)
      
      setPhone(value)
    }
  }

  async function sendSms() {
    props.setComponent('Auth-sms')
  }

  return (
    <ScrollView onScroll={Keyboard.dismiss} showsVerticalScrollIndicator={false} contentContainerStyle={form}>
      <View>
        <View>
          <TextInput 
          style={ {...field, borderColor: phone.length === 18 ? '#629c65' : 'silver'} }
          placeholder='+7 (___) __-__'
          onChangeText={(tel: string) => handlePhone(tel)}
          value={ phone }
          placeholderTextColor='#9D9D9D'
          keyboardType='numeric'
          maxLength={18}
          /* "\+7\s[\(][0-9]{3}[\)]\s\d{3}[-]\d{2}[-]\d{2}" */
          />
        </View>
        <View style={ border }>
          <TouchableWithoutFeedback onPress={sendSms}>
              <Text style={ button }>Войти</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
    
  );
}


const { form, field, link, border, rotate, button } = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  field:{
    width: 256,
    marginTop: 7,
    paddingLeft: 23,
    height: 55,
    fontSize: 20,
    borderRadius: 30,
    borderWidth: 2,
  },
  link:{
    fontSize: 16,
    alignSelf: 'flex-end',
    color: '#3B4282',
    marginTop: 5,
  },
  border: {
    marginTop: 20,
    borderRadius: 20,
    width: 256,
    height: 50,
    backgroundColor: '#d2d2d2',
  },
  rotate: {
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    // borderColor: '#629c65',
    // height: 17,
    // width: 12,
    // top: 22,
    // right: 15,
    // position: "absolute",
    // borderTopWidth: 10,
    // borderLeftWidth: 10,
  },
  button:{
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 11,
    color: '#595051'
  }
});
