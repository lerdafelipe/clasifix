import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
//
import CartWidget from '../CartWidget/index'
import {HiMenuAlt1} from 'react-icons/hi'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }
    return (
        <>
            <div className="NavBar">
                <nav>
                    <ul>
                        <Link to="/" className="Link"><p>Todos los productos</p></Link>
                        <Link to={`/category/Entradas`}  className="Link"><p>Entradas</p></Link>
                        <Link to={`/category/Platos`} className="Link"><p>Platos</p></Link>
                        <Link to={`/category/Bebidas`} className="Link"><p>Bebidas</p></Link>
                        <Link to={`/category/Cocteles`} className="Link"><p>Cocteles</p></Link>
                    </ul>
                    <Link to="/Cart" className="toCart"><CartWidget/></Link>
                </nav>
            </div>

            <div className="NavMobile">
                <nav>
                    <button onClick={toggleMenu}><HiMenuAlt1/> Categorias</button>
                    <Link to="/Cart" className="toCart"><CartWidget/></Link>
                    <ul className={showMenu ? ("active") : null}>
                        <Link to="/" className="Link"><p>Todos los productos</p></Link>
                        <Link to={`/category/Entradas`}  className="Link"><p>Entradas</p></Link>
                        <Link to={`/category/Platos`} className="Link"><p>Platos</p></Link>
                        <Link to={`/category/Bebidas`} className="Link"><p>Bebidas</p></Link>
                        <Link to={`/category/Cocteles`} className="Link"><p>Cocteles</p></Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar;
