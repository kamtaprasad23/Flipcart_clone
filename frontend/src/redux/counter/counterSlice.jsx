import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    addtocart: [],
    isCartOpen: false,
    username: null,  // ⬅️ username state
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addproduct: (state, action) => {
      const existingItem = state.addtocart.find(item => item.cartId === action.payload.cartId);
      if (!existingItem) {
        state.addtocart.push(action.payload);
        state.value += 1;
      }
    },
    removeaddproduct: (state, action) => {
      state.addtocart = state.addtocart.filter(item => item.cartId !== action.payload);
      state.value -= 1;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = null;
      state.addtocart = [];
      state.value = 0;
      state.isCartOpen = false;
    },
  },
});

export const { increment, decrement, addproduct, removeaddproduct, openCart, closeCart, setUsername, logout } = counterSlice.actions;

export default counterSlice.reducer;
