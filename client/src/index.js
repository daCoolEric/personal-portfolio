import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import NavBarContextProvider from './features/Context/NavBarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<NavBarContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</NavBarContextProvider>
</Provider>
    
  
);



