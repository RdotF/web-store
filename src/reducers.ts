import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer'; // Import your cart reducer

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer// Include cartReducer in the root reducer
  // Add other reducers here when you have them
});

export default rootReducer;
