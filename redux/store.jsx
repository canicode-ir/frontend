import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cartSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    userCartItems: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
