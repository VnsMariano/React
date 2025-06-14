import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <div>
    <h2>Produtos</h2>
    {products.map(product => (
      <div key={product.id}>
        <p>{product.name} - R$ {product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
      </div>
    ))}
  </div>
);

export default ProductList;
