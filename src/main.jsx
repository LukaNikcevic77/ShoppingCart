import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ShoppingCartContext, ShoppingCartContextProvider } from './context/shopping-cart.jsx'
import '../src/style/style.scss'
import Shop from './compoennts/Shop.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShoppingCartContextProvider>
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  </ShoppingCartContextProvider>
)
