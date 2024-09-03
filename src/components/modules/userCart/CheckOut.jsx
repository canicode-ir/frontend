"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserCart,
  selectUserCartItems,
} from "../../../../redux/features/cartSlice";

function CheckOut({ token }) {
  //connecting RTK
  //Orders and TotalPrice are at first as undefined
  const {
    cartItems: { totalPrice, orders },
    loading,
    error,
  } = useSelector(selectUserCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUserCart());
  }, []);

  return <div>CheckOut</div>;
}

export default CheckOut;
