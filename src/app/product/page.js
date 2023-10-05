'use client'
import { useState, useEffect } from 'react';

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  );
}


