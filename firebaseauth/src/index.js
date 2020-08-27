import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './provider/AuthProvider'
import {BrowserRouter} from 'react-router-dom'
// import postapi from './api/api';



ReactDOM.render(
<BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
</BrowserRouter>
, document.getElementById('root'));