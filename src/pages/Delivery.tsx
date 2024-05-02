import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/styles.css';
import receivedIcon from '../assets/recieved.png';

const Delivery: React.FC = () => {
  const orderedItems = useSelector((state: any) => state.cart.orderedItems);
  const dispatch = useDispatch();

  const handleDeliveryArrived = () => {
    dispatch({ type: 'CLEAR_ORDER' });
    alert('Your order has been received!');
  };

  return (
    <div className="delivery-container">
      <div className="delivery-header">
        <h1 className="delivery-text">Delivery Status</h1>
      </div>
      
      {orderedItems.length === 0 ? (
        <p className="delivery-text">You have no orders</p>
      ) : (
        <>
          <ul className="ordered-items">
            {orderedItems.map((item: any) => (
              <li key={item.id} className="ordered-item">
                <img src={item.image} alt={item.title} className="ordered-item-image" />
                <span className="delivery-text">{item.title} - Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
          
          <div className="delivery-action">
            <img src={receivedIcon} alt="Received" className="delivery-icon" />
            <button className="delivery-button" onClick={handleDeliveryArrived}>
              I have received my order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Delivery;
