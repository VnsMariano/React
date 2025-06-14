import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - R$ {item.price.toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remover</button>
        </div>
      ))}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
