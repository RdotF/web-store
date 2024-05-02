// Checkout.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import the clearCart action
import '../style/styles.css';
import Icon from '../assets/checkout.png';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  // Calculate total price based on quantity
  const totalPrice = cartItems.reduce((total: number, item: any) => total + (item.price * item.quantity), 0);

  const handleBuy = () => {
    // Clear cart
    dispatch({type:'CLEAR_CART'});
    // Display confirmation message
   
    dispatch({type:'ADD_TO_ORDER', payload: cartItems })
   
    alert('Your order is on the way!');
    // Navigate to delivery page
    navigate('/delivery');
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item: any) => (
            <div key={item.id} className="checkout-item">
              <p style={{fontSize:20}}>{item.title}</p>
              <p>Quantity: {item.quantity}</p> {/* Display quantity */}
              <p>Price: ${item.price}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p> {/* Calculate subtotal */}
            </div>
          ))}
          <div className="total">Total: ${totalPrice.toFixed(2)}</div>
          <div className="checkout-button-container">
            <img src={Icon} alt="checkout icon" className="checkout-icon" />
            <button className="checkout-button" onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
