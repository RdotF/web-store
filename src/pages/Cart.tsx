// Cart.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem.tsx';
import '../style/styles.css'; // Import styles

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart.items);
  const isLoggedIn = useSelector((state: any) => state.cart.isLoggedIn);
  // Get isLoggedIn from Redux store

  const handleProceedToCheckout = () => {
    if (!isLoggedIn) {
      alert('You need to be logged in to proceed to checkout.'); // Display alert if not logged in
      navigate('/authorization'); // Redirect to login page
    } else {
      navigate('/checkout'); // Proceed to checkout if logged in
    }
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="checkout-button-container">
            <button className="checkout-button" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
