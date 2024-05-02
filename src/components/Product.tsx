// Product.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/styles.css'

interface Props {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
}

const Product: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    });
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 20)}...</h3> {/* Limit title to 40 characters */}
      <p className="description">{product.description.substring(0, 100)}...</p> {/* Limit description to 100 characters */}
      <p className="price">${product.price}</p> {/* Style price differently */}
      <button onClick={handleAddToCart}>Buy</button>
    </div>
  );
};

export default Product;