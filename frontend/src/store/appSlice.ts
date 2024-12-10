import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { AppSlice, Book } from "./app.types";

const initialState: AppSlice = {
  isMenuOpen: false,
  query: "",
  index: 0,
  cart: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = "";
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    addToCart: (state, action) => {
      const book = action.payload;

      if (state.cart[book._id]) {
        state.cart[book._id].quantity += 1;
      } else {
        state.cart[book._id] = { ...book, quantity: 1 };
      }
    },
    removeFromCart: (state, action) => {
      const bookId = action.payload;
      delete state.cart[bookId];
    },
    decreaseQuantity: (state, action) => {
      const bookId = action.payload;

      if (state.cart[bookId] && state.cart[bookId].quantity > 1) {
        state.cart[bookId].quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const bookId = action.payload;

      if (state.cart[bookId]) {
        state.cart[bookId].quantity += 1;
      }
    },
  },
});

// Export Actions
export const {
  toggleMenu,
  setQuery,
  clearQuery,
  setIndex,
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} = appSlice.actions;

// Selectors
export const AppSelectors = {
  selectIsMenuOpen: (state: RootState) => state.app.isMenuOpen,
  selectQuery: (state: RootState) => state.app.query,
  selectIndex: (state: RootState) => state.app.index,
  selectCart: (state: RootState) => state.app.cart,
  selectCartLength: (state: RootState) =>
    Object.values(state.app.cart).reduce(
      (total: number, item) => total + (item as Book).quantity,
      0
    ),
};
