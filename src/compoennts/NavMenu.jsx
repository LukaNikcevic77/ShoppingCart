import React, {useState, useEffect} from "react";
import '../style/style.scss'

function Navigation() {

    const [visible, setVisible] = useState('none')

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
                    Home
                </li>
                <li>
                    Store
                </li>
                <button onClick={hideUnhide} className="mediumText">See cart</button>
            </ul>
        </div>
        <aside className="checkout"  style={{display : `${visible}`}}>
            <p className="mediumText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, nisi amet. Nobis officia sed reprehenderit dolor, est ad eveniet quis officiis, necessitatibus ipsum non, quasi tempore assumenda quisquam consequuntur magnam.</p>
            <button onClick={hideUnhide} className="mediumText">Hide cart!</button>
        </aside>
        </>
    )
}

export default Navigation;