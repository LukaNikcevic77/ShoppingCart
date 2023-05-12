import React, {useState, useEffect} from "react";
import Item from "./Item";
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
            {items.map((item) => 
            <Item items={item} onBeingClicked={onBeingClicked}/>
        )}
        </div>
        
    )
}


export default Shop;