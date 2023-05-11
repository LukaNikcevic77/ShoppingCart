import React, {useState, useEffect} from "react";
import '../style/style.scss'


function Shop(props) {
    const items = props.items;

   
    const onBeingClicked = (data) => {
        let newArej = [...props.currentCart];
        console.log(props)
        newArej.push(data);


        props.selectedItems(newArej);
    }
    
    return (
        
        <div className="homeGrid">
            {items.map((item) => (
                <div className="item" key={item.id}>
                    
                 <h1 className="smallText"></h1>
                    <img src={item.image} alt="" />
                    <h1>{item.title}</h1>
                    <p className="ultraSmallText">{item.description}</p>
                    <p className="ultraSmallText">{item.price}</p>
                    <button className="mediumText" onClick={() => onBeingClicked(items[item.id - 1])}>Add me to cart! {item.id}</button>
                
            </div>
            ))}
        </div>
        
    )
}


export default Shop;