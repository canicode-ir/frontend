"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserCart,
  selectUserCartItems,
} from "../../../../redux/features/cartSlice";

//Components
import EmptyCart from "./EmptyCart";
import Loading from "../../elements/Loading";
import CheckOutItem from "./CheckOutItem";
import CheckOutBilling from "./CheckOutBilling";

//Icons & Images
import ViewStreamIcon from "@mui/icons-material/ViewStream";

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

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {orders && orders.length ? (
        <div className="flex flex-col mt-10 w-full justify-center items-center">
          <main className="flex flex-col w-full justify-center items-center">
            <div className="flex w-fit ml-auto justify-center items-center">
              <ViewStreamIcon
                sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
              />
              <h5 className="font-heavey text-title text-md md:text-lg">
                انتخاب های شما:
              </h5>
            </div>
            {orders.map((order) => (
              <CheckOutItem
                key={order._id}
                orderData={order.course}
                token={token}
              />
            ))}
          </main>
          <aside className="flex flex-col w-full justify-center items-center mt-10">
            <div className="flex w-fit ml-auto justify-center items-center">
              <ViewStreamIcon
                sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
              />
              <h5 className="font-heavey text-title text-md md:text-lg">
                فاکتور نهایی:
              </h5>
            </div>
            <CheckOutBilling
              orders={orders}
              totalPrice={totalPrice}
              token={token}
            />
          </aside>
        </div>
      ) : !loading && orders && orders.length === 0 ? (
        <EmptyCart />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default CheckOut;
