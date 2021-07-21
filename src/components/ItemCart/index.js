import React from 'react'
//Import the icon for remove item
import {GrTrash} from 'react-icons/gr';

function ItemCart({item, unitary, remove}) {
    return (
        <>
            <tr>
                <td>{item.item.name}</td>
                <td>{item.cantidad}</td>
                <td>${unitary}</td>
                <td>
                    <button onClick={remove}>
                        <GrTrash className="cart-Trash"/>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default ItemCart;
