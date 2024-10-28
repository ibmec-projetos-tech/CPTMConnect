import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Carrosel from './Carrosel';
import Busca from './Busca';
import Anuncio from './Anuncio';
import Footer from './Footer';
import NavMenu from './NavMenu';
import Mapa from './Mapa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavMenu />
    <Carrosel />
    <Busca />
    <Anuncio />
    <Mapa />
    <Footer />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
