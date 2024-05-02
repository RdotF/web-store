// cartReducer.js

const initialState = {
  items: [], 
  orderedItems: [], 
  isLoggedIn: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
   
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item already exists, increase its quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If the item doesn't exist in the cart, add it with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    // Add other cart-related actions here as needed

   
    case 'INCREASE_QUANTITY':
      console.log(action.payload.id);
      const itemId = action.payload.id;
      console.log(itemId);
      const itemIndex = state.items.findIndex(i => i.id === itemId);
      console.log(itemIndex);
      if (itemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = [...state.items]; // Create a copy of the items array
        updatedItems[itemIndex] = { ...updatedItems[itemIndex], quantity: updatedItems[itemIndex].quantity + 1 }; // Update the quantity of the item
        return { ...state, items: updatedItems };
      }
      case 'DECREASE_QUANTITY':
        const itemIdD = action.payload.id;
        const itemIndexD = state.items.findIndex(item => item.id === itemIdD);
        
        if (itemIndexD !== -1) {
          // If the item exists, update its quantity without mutating the original state
          const updatedItems = [...state.items]; // Create a copy of the items array
          if (updatedItems[itemIndexD].quantity > 1) {
            updatedItems[itemIndexD] = { ...updatedItems[itemIndexD], quantity: updatedItems[itemIndexD].quantity - 1 }; // Decrease the quantity of the item
          } else {
            // If the quantity is 1, remove the item from the cart
            updatedItems.splice(itemIndexD, 1);
          }
          return { ...state, items: updatedItems }; // Return the new state with the updated items array
        }
        
   
        return state;
        case 'CLEAR_CART':
         
          return { ...state, items: [] };
    
        case 'ADD_TO_ORDER':
         
          return { ...state, orderedItems: [...state.orderedItems, ...action.payload] };
        case 'CLEAR_ORDER':
          return { ...state, orderedItems: [] };
          case 'LOGIN':
            return { ...state, isLoggedIn: true }; // Set isLoggedIn to true when the user logs in
          case 'LOGOUT':
            return { ...state, isLoggedIn: false };
    default:
      return state;

  }
};

export default cartReducer;
