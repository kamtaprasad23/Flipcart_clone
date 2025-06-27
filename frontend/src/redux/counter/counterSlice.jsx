import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    addtocart: [],
    isCartOpen:false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    addproduct: (state, action) => {
      state.addtocart.push(action.payload);
      state.value += 1
    },
    removeaddproduct: (state, action) => {
      state.addtocart = state.addtocart.filter(item => item.cartId !== action.payload)
      state.value -= 1
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addproduct, removeaddproduct,openCart,closeCart } = counterSlice.actions

export default counterSlice.reducer