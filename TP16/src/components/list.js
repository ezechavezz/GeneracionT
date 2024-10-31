import React, { useContext } from 'react';
import { Products } from '../products'
import { CartContext } from '../contexts/cartContext'

function List() {
    const { addToCart} = useContext(CartContext)
  return ( 
    <div>
        <h1>Lista:</h1>
            {Products.map((item, index) => (
                <div key={index} >
                    <div>{item.name}</div><br/>
                    <div>{item.description}</div><br/>
                    <div>${item.price}</div><br/>
                    <button onClick={() => addToCart(item)}>Agregar</button><br/><br/><br/><br/>
                </div>
            ))}
            <br/><br/><br/>
    </div>
  )
}

export default List
