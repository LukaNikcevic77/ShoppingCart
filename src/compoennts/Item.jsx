import React, {useState, useEffect} from "react";

function Item(props) {

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
                    
                    <button className="mediumText" disabled={canBeAded} onClick={() => {props.onBeingClicked(props.items); changeStateOfAddCart(true)}}  style={
                        {display: props.showAddCart}
                    } >Add me to cart! {props.items.id}</button>
                    <button className="mediumText" onClick={() => {props.itemRemove(props.items); changeStateOfAddCart(false)}}>Remove item</button>
                
            </div>
    )
}

export default Item;