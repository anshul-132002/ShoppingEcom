import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for fetching products
export const getProduct = createAsyncThunk("cart/getProduct", async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=28");
  return response.data.products;
});

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [], // Stores added products
    products: [], // All fetched products
    loading: false, // Loading state for async actions
    error: null, // Error state
  },
  reducers: {
    addProduct: (state, action) => {
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeAllProduct: (state) => {
      state.cart = [];
    },
    incrementProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decrementproduct: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct && existingProduct.quantity>1) {
        existingProduct.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addProduct, removeProduct, removeAllProduct, incrementProduct ,decrementproduct} =
  CartSlice.actions;
export default CartSlice.reducer;
