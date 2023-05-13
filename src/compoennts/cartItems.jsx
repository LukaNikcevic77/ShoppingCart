import React, { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from "../context/shopping-cart";

function CartItemDisplay(props){
    const {shoppingCartItems, setShoppingCartItems, addToCart, removeFromCart} = useContext(ShoppingCartContext);
    

    return (
        <>
            <h1 className="smallText"></h1>
                    <img src={props.items.image} alt="" />
                    <h1>{props.items.title}</h1>
                    <p className="ultraSmallText">{props.items.description}</p>
                    <p className="ultraSmallText">{props.items.price}</p>
                    
                    <button className="mediumText"  onClick={() => addToCart(props.items.id)}> + </button>
                    <h1 className="mediumText"> Quantity: {shoppingCartItems[props.items.id]}</h1>
                    <button className="mediumText" onClick={() => removeFromCart(props.items.id)}> -</button>
        </>
    )
}

export default CartItemDisplay;