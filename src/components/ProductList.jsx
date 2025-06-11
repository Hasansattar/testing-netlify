import React from 'react'
import { Product } from './Product';

export const ProductList = () => {
    const products = [
{ id: 1, name: 'Laptop', price: 999 },
{ id: 2, name: 'Phone', price: 599 },
{ id: 3, name: 'Tablet', price: 399 },
];
  return (
   <div>
{products.map((product) => (
<Product key={product.id} name={product.name} price={product.price} />
))}
</div>
  )
}
