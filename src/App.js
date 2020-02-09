import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import {store} from './store';

import {Header} from './modules/header/index'
import {List} from './modules/list/index'
import {Footer} from './modules/footer/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <List />
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
