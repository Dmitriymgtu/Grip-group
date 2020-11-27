import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, TextInput, View } from 'react-native';


const AuthSms:React.FC = () => {
  const [sms, setSms] = useState('')

  return (
    <ScrollView onScroll={Keyboard.dismiss} showsVerticalScrollIndicator={false} contentContainerStyle={form}>
        <View>
            <TextInput 
            style={ field }
            placeholder='SMS'
            onChangeText={(sms: string) => setSms(sms)}
            value={ sms }
            placeholderTextColor='#9D9D9D'
            keyboardType='numeric'
            maxLength={18}
            />
        </View>
    </ScrollView>
    
  );
}


const { form, field } = StyleSheet.create({
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
    borderColor: 'silver'
  }
});

export default AuthSms
