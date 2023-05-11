import { useState, useEffect } from 'react'
import '../src/style/style.scss'
import Shop from './compoennts/Shop'
import Navigation from './compoennts/NavMenu'
function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setItems(json))
    console.log(items);
  }, [])

  function updateCart(a) {
    setCartItems(a);
  }
  

  return (
    <>
    <Navigation itemsToBuy={cartItems} updateMyCart={updateCart}/>
    <Shop items = {items} selectedItems={updateCart} currentCart = {cartItems}/>
    </>
  )
}

export default App
