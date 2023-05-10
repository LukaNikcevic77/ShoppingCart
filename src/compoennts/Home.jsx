import React, {useState, useEffect} from "react";
import '../style/style.scss'


function Home() {
    const Areja = [{
        id: 0,
        title: "Fjalvanea",
        price: 125,
        description: "Just soem garbage u gonna buy it anyways",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    },{
        id: 1,
        title: "Marinela",
        price: 254,
        description: "Just soem sdd u gonna buy it anyways",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    },
    {
        id: 2,
        title: "Kurtonela",
        price: 669,
        description: "Just ambis garbage u gonna buy it anyways",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    },
    {
        id: 3,
        title: "Ambisi",
        price: 25,
        description: "Svasta soem garbage u gonna buy it anyways",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    },
    {
        id: 4,
        title: "Smece",
        price: 125,
        description: "Just soem smece u gonna buy it anyways",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    }];

    
    return (
        
        <div className="homeGrid">
            {Areja.map((item) => (
                <div className="item" key={item.id}>
                 <h1 className="smallText">
                    <img src={item.image} alt="" />
                    <h1>{item.title}</h1>
                    <p className="ultraSmallText">{item.description}</p>
                    <p className="ultraSmallText">{item.price}</p>

                </h1>
            </div>
            ))}
        </div>
        
    )
}


export default Home;