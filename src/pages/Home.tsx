// Home.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product.tsx';
import '../style/styles.css'

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
