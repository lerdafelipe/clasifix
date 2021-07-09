import React from 'react'
import {GrTrash} from 'react-icons/gr';

function ItemCart({item, unitary, remove}) {
    return (
        <>
            <tr>
                <td>{item.item.name}</td>
                <td>{item.cantidad}</td>
                <td>{item.item.price}</td>
                <td>${unitary}</td>
                <td>
                    <button onClick={remove}>
                        <GrTrash className="cart-Trash"/>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ItemCart
