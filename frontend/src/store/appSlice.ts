import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// reducer
export const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    query: "",
    index: 0,
  },
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
  },
});

//actions
export const { toggleMenu, setQuery, clearQuery, setIndex } = appSlice.actions;

//selectors
export const AppSelectors = {
  selectIsMenuOpen: (state: RootState) => state.app.isMenuOpen,
  selectQuery: (state: RootState) => state.app.query,
  selectIndex: (state: RootState) => state.app.index,
};
