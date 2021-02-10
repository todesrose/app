import React from 'react';
import Calc from './Calc.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
   
    <div className="App">
       <Provider store={store}>
      <Calc />
      </Provider>
    </div>
    
  );
}

export default App;
