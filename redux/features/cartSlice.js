import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../src/services/api";
import Cookies from "js-cookie";

const authToken = Cookies.get("token");

const initialState = {
  loading: false,
  cartItems: [],
  error: "",
};

const fetchUserCart = createAsyncThunk("fetchUserCart", async () => {
  const res = await fetch(`${BASE_URL}cart`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const data = await res.json();
  return data;
});

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUserCart.rejected, (state, action) => {
      state.loading = false;
      state.cartItems = [];
      state.error = action.error.message;
    });
  },
});

export default cartSlice.reducer;
export { fetchUserCart };
export const selectUserCartItems = (store) => store.userCartItems;
