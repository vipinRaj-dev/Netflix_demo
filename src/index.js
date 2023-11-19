import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ContexName = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContexName.Provider value='Vipin'>
    <App />
  </ContexName.Provider>
);
export {
  ContexName
}