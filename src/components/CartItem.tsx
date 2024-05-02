import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../reducers/cartSlice.tsx';
import '../style/styles.css';

interface Props {
  item: any;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: item,
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: item,
    });
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="text-container">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="quantity-buttons">
        <button onClick={handleDecrease}>
          <img
            src={require('../assets/minus.png')}
            alt="minus"
            className="quantity-icon"
          />
        </button>
        <button onClick={handleIncrease}>
          <img
            src={require('../assets/plus.png')}
            alt="plus"
            className="quantity-icon"
     
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
