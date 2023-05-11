import React, {useState, useEffect} from "react";
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

    function RemoveItem(e, b) {
        
        
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
                {buyingItems.map((item) => (
                <div className="item" key={item.id}>
                  
                 <h1 className="smallText">This is my id: {item.id}</h1>
                    <img src={item.image} alt="" />
                    <h1>{item.title}</h1>
                    <p className="ultraSmallText">{item.description}</p>
                    <p className="ultraSmallText">{item.price}</p>
                    <button onClick={(e) => RemoveItem(e, item)}>Remove papa!</button>
                    
            </div>
            ))}
            <button onClick={hideUnhide} className="mediumText">Hide cart!</button>
            <h1 className="mediumText">{buyingItems.length}</h1>
        </aside>
        </>
    )
}

export default Navigation;