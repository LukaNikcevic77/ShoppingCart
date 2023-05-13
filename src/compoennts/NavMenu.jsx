import React, {useState, useEffect, useContext} from "react";
import CartItemDisplay from "./cartItems";
import { ShoppingCartContext } from "../context/shopping-cart";

import '../style/style.scss'
import { Link } from "react-router-dom";

function Navigation(props) {

    const {shoppingCartItems, setShoppingCartItems, addToCart, removeFromCart} = useContext(ShoppingCartContext);
    
    const [visible, setVisible] = useState('none');

    let items = props.itemsToBuy;

    function hideUnhide() {
        if(visible === 'none'){
            setVisible('')
        }
        else {
            setVisible('none');
        }
    }

    
    
    return(
        <>
        <div>
            <ul className="navlist bigText">
                <li>
                    <Link to="/home">
                        Home 
                    </Link>
                   
                </li>
                <li>
                    <Link to="/">Store</Link>
                </li>
                <button onClick={hideUnhide} className="mediumText">See cart</button>
            </ul>
        </div>
        <aside className="checkout"  style={{display : `${visible}`}}>
        {items.map((ajtem) => {
            if(shoppingCartItems[ajtem.id] > 0){
                return (<CartItemDisplay items = {ajtem} />);
                
            }
        }
        )}
            <button onClick={hideUnhide} className="mediumText">Hide cart!</button>
           
        </aside>
        </>
    )
}

export default Navigation;