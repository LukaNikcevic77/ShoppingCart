import React, {useState, useEffect, useContext} from "react";
import { ShoppingCartContext } from "../context/shopping-cart";
function Item(props) {

    const {shoppingCartItems, setShoppingCartItems, addToCart, removeFromCart} = useContext(ShoppingCartContext);

    const [canBeAded, setCanBeAded] = useState(false);
    function changeStateOfAddCart(a){
        setCanBeAded(a);
        console.log(a);
    }

    
    return (
        <div className="item" key={props.items.id}>
                    
                 <h1 className="smallText"></h1>
                    <img src={props.items.image} alt="" />
                    <h1>{props.items.title}</h1>
                    <p className="ultraSmallText">{props.items.description}</p>
                    <p className="ultraSmallText">{props.items.price}</p>
                    
                    <button className="mediumText"  onClick={() => addToCart(props.items.id)} >Add me to cart! {props.items.id}</button>
                    <h1 className="mediumText">{shoppingCartItems[props.items.id]}</h1>
                
            </div>
    )
}

export default Item;