import React, {useState, useEffect} from "react";
import Item from "./Item";
import '../style/style.scss'

function Navigation(props) {

    const [visible, setVisible] = useState('none')
    const [buyingItems, setBuyingItems] = useState(props.itemsToBuy);

    function hideUnhide() {
        if(visible === 'none'){
            setVisible('')
        }
        else {
            setVisible('none');
        }
    }

    useEffect(() => {
        let newArej = [...props.itemsToBuy];
        setBuyingItems(newArej);
        console.log("Ce se vrnem jebem ti decu! ");
        console.log(newArej);
    }, [props.itemsToBuy])

    function RemoveItem( b) {
        
        
        let oldArej = [...props.itemsToBuy];
        let newArej = oldArej.filter(ajtem => ajtem != b);
        props.updateMyCart(newArej);

        
        
    }
    
    return(
        <>
        <div>
            <ul className="navlist bigText">
                <li>
                    Home
                </li>
                <li>
                    Store
                </li>
                <button onClick={hideUnhide} className="mediumText">See cart</button>
            </ul>
        </div>
        <aside className="checkout"  style={{display : `${visible}`}}>
        {buyingItems.map((tshi) => 
            <Item items={tshi} showAddCart={'none'} itemRemove={RemoveItem}/>
        )}
            <button onClick={hideUnhide} className="mediumText">Hide cart!</button>
            <h1 className="mediumText">{buyingItems.length}</h1>
        </aside>
        </>
    )
}

export default Navigation;