import React from 'react';
import store from './src/store/store'
import { observer, Provider } from 'mobx-react'
import AppView from './AppView';

function App() {

  return(
    <Provider store={store}>
      <AppView/>
    </Provider>
  );
}

export default App
