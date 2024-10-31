import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

function Cart() {
    const { cartItems, removeFromCart} = useContext(CartContext)
  return (
    <div style={{backgroundColor:'gray'}}>
        <h1>carrito:</h1>
      {cartItems.map((item, index) => (
        <div key={item.id}>
          <div>{item.name}</div><br/>
          <div>{item.description}</div><br/>
          <div>${item.price}</div><br/>
          <button onClick={() => removeFromCart(index)}>Eliminar</button>
          <br/>
        </div>
              ))}
    </div>
  )
}

export default Cart
