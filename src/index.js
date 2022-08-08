import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Pages/Inicio';
import Principal from './Principal/Principal';
import Cliente from './Cliente/Cliente';
import Login from './firebase/Login';
import Register from './firebase/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Principal>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="Inicio" element={<Inicio />} />
      <Route path="Cliente" element={<Cliente />} />
      <Route path="Register" element={<Register/>} />
      <Route path='Login' element={<Login/>} />
    </Routes>
    </Principal>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
