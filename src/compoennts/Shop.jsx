import React, {useState, useEffect} from "react";
import Item from "./Item";
import '../style/style.scss'


function Shop(props) {
    const items = props.items;

   
    const onBeingClicked = (data, b) => {
        
        let newArej = [...props.currentCart];
        if(newArej.indexOf(data) == -1){
            
            b()
            newArej.push(data);
            
    
            props.selectedItems(newArej);
            
        }
        else {
            b()
        }
        
            
        
            
        
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