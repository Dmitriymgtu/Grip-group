import React from 'react';
import store from './src/store/store'
import { observer, Provider } from 'mobx-react'
import AppView from './AppView';

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyBzDF-BmrSrRTqImqv9HQ3Aym0X-32_NQk",
  authDomain: "delivery-318a7.firebaseapp.com",
  databaseURL: "https://delivery-318a7.firebaseio.com",
  projectId: "delivery-318a7",
  storageBucket: "delivery-318a7.appspot.com",
  messagingSenderId: "767740876996",
  appId: "1:767740876996:web:bad233567e87b9e1a1d191"
});

function App() {

  return(
    <Provider store={store}>
      <AppView/>
    </Provider>
  );
}

export default App
