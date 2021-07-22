import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import storeGlobal from "./store";
// import { } from "react-router-dom"

function App() {
  return (
    <>
      <Provider store={storeGlobal}>
        xin chao
      </Provider>

    </>
  );
}

export default App;
