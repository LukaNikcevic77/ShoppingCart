import React, {useState, createContext} from "react";
import { Context } from "react";


export const ShoppingCartContext = createContext(null);


export const ShoppingCartContextProvider = (props) => {
    const [shoppingCartItems, setShoppingCartItems] = useState({});

    const addToCart = (itemId) => {
        setShoppingCartItems((cartItems) => ({...cartItems, [itemId]: cartItems[itemId] + 1 }))
    } 
    const removeFromCart = (itemId) => {
        setShoppingCartItems((cartItems) => ({...cartItems, [itemId]: cartItems[itemId] - 1 }))
    } 
    console.log(shoppingCartItems);

    const contextValue= {shoppingCartItems, setShoppingCartItems, addToCart, removeFromCart};
    return <ShoppingCartContext.Provider value={contextValue}>{props.children}</ShoppingCartContext.Provider>

}