import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleHideCart(state) {
      state.isHidden = !state.isHidden;
    },

    addItemToCart(state, action) {
      let quantity = 1;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity,
        });
      }
    },

    deleteItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },

    decreaseItemQuantity(state, action) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        existingCartItem.quantity--;
      }
    },
  },
});

export const {
  toggleHideCart,
  addItemToCart,
  deleteItemFromCart,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
