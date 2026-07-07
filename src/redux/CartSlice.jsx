import { createSlice } from '@reduxjs/toolkit';

// Cart items are stored as a flat array of { id, name, price, quantity, icon }.
// Keeping the whole plant record (minus description) means CartItem.jsx can
// render the thumbnail/name/price without re-looking anything up.
const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds a plant to the cart. If it's already there, bump its quantity
    // instead of creating a duplicate row.
    addItem: (state, action) => {
      const { id, name, price, icon } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ id, name, price, icon, quantity: 1 });
      }
    },
    // Removes a plant entirely from the cart, regardless of quantity.
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Increases quantity of a single plant type by one.
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    // Decreases quantity by one; removes the line entirely once it hits zero.
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
