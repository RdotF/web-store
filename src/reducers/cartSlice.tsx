import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    increaseQuantity(state, action: PayloadAction<CartItem>) {
      const currentItem = action.payload;
      const item = state.items.find(item => item.id === currentItem.id);
      if (item) {
        item.quantity++;
        console.log('Increased quantity for item with id', currentItem.id);
      }
    },
    decreaseQuantity(state, action: PayloadAction<CartItem>) {
      const currentItem = action.payload;
      const item = state.items.find(item => item.id === currentItem.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        console.log('Decreased quantity for item with id', currentItem.id);
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
