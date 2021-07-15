import React, {useEffect, useState} from 'react';
import Item from './../../components/Item/index';
import {Link} from 'react-router-dom';
import './Categories.css';
import {db} from './../../firebase/firebase';

function Categories({match}) {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let categoriaElegida = match.params.category;

    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            });

            const productosCategoria = docs.filter(producto => producto.category === categoriaElegida)

            setProductos(productosCategoria);
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        setIsLoading(true);
        getProducts();
    }, [match.params.category]);

    return (
        <>   
        <h3 className="title-category">{categoriaElegida}</h3>
        {isLoading ? (<div className="Loader"></div>) : null}
        <div className="itemsListContainer">
            {productos.map( (producto) =>{
                return (<div  key={producto.id} className="div-cards">
                            <Link className="LinkCard" to={`/detail/${producto.id}`}>
                                <Item price={producto.price} 
                                    img={producto.img} 
                                    name={producto.name} 
                                    stock={producto.stock}/>
                            </Link>
                        </div>)
                    }
            )}
        </div>
        </>
    );
}

export default Categories;
