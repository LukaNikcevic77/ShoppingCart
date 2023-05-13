import { useState, useEffect, useContext } from 'react'
import '../src/style/style.scss'
import Shop from './compoennts/Shop'
import Navigation from './compoennts/NavMenu'
import Home from './compoennts/home'
import { ShoppingCartContext } from './context/shopping-cart'
import { Route, Routes } from 'react-router-dom'


function App() {
  const {shoppingCartItems, setShoppingCartItems, addToCart, removeFromCart} = useContext(ShoppingCartContext);
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function cartItemsDefault(items){
    let cart = {};
    for ( let i = 1; i < items.length + 1; i++){
        cart[i] =  0;
    }
   
    setShoppingCartItems(cart);
    

}

async function FetchData(){
  let unserialized = await fetch('https://fakestoreapi.com/products')
  let serialized = await unserialized.json()
  setItems(serialized)
  cartItemsDefault(serialized);
  
}

  useEffect(() => {
    
    FetchData();
    
  }, [])

  function updateCart(a) {
    setCartItems(a);
  }
  

  return (
    <>
    <Navigation itemsToBuy={items} updateMyCart={updateCart}/>
    <Routes>
      <Route path="/" element={<Shop items = {items} selectedItems={updateCart} currentCart = {cartItems}/>}/>
      <Route path="/home" element={<Home />}/>
    
    
   
    </Routes>
    </>
  )
}

export default App