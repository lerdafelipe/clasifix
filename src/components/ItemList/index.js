import React, {useEffect, useState} from 'react';
import './ItemList.css'
import ProductCard from '../ProductCard';

function ItemList() {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {"id": 1, "name": "Potatoes - Instant, Mashed","price": 133,"image": "http://dummyimage.com/346x346.png/cc0000/ffffff"}, 
                    {"id": 2, "name": "Tarts Assorted","price": 387,"image": "http://dummyimage.com/268x268.png/5fa2dd/ffffff"}, 
                    {"id": 3,"name": "Wine - Red, Mosaic Zweigelt","price": 757,"image": "http://dummyimage.com/266x266.png/ff4444/ffffff"}, 
                    {"id": 4,"name": "Honey - Liquid","price": 1010,"image": "http://dummyimage.com/315x315.png/dddddd/000000"}, 
                    {"id": 5,"name": "Calypso - Lemonade", "price": 1402,"image": "http://dummyimage.com/258x258.png/ff4444/ffffff"}
                ])
            }, 2000)
        })
        
        promise.then((result)=>{
            setProductos(result)
        })

    }, [])

    return (
        <>
            {productos.map( producto => <ProductCard key={producto.id} img={producto.image} name={producto.name}/>)}
        </>
    )
}

export default ItemList;
