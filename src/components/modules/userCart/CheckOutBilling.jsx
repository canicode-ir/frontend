"use client";

import axios from "axios";
import { BASE_URL } from "../../../services/api";
import { useDispatch } from "react-redux";
import { fetchUserCart } from "../../../../redux/features/cartSlice";
import IconButton from "@mui/material/IconButton";

//Functions
import { addCommas } from "../../../helpers/functions";
import { notify } from "../../../utils/Toast";

//Icons & Images
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import ClearIcon from "@mui/icons-material/Clear";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PercentIcon from "@mui/icons-material/Percent";
import RedeemIcon from "@mui/icons-material/Redeem";
import PaymentsIcon from "@mui/icons-material/Payments";

function CheckOutBilling({ orders, totalPrice, token }) {
  const dispatch = useDispatch();

  const deleteCourseFromCart = async (e, id) => {
    e.preventDefault;
    if (token) {
      try {
        await axios.delete(
          `${BASE_URL}cart/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          {
            courseId: id,
          }
        );
        dispatch(fetchUserCart());
        notify("دوره از سبد خرید حذف شد", "success");
      } catch (error) {
        notify("خطایی در سیستم رخ داده است، لطفاً مجدد امتحان کنید", "error");
      }
    }
  };
  const taxAmount = totalPrice * 0.09;

  const finalBillingData = [
    {
      id: "total",
      text: "جمع کل (بعلاوه مالیات): ",
      amount: addCommas(totalPrice + taxAmount),
      avatar: (
        <CreditScoreIcon fontSize="small" sx={{ color: "#a5b4fc", ml: 0.5 }} />
      ),
    },
    {
      id: "tax",
      text: "مالیات ارزش افزوده | 9%: ",
      amount: addCommas(taxAmount),
      avatar: (
        <PercentIcon fontSize="small" sx={{ color: "#a5b4fc", ml: 0.5 }} />
      ),
    },
    {
      id: "gift",
      text: "سود شمااز این خرید: ",
      amount: addCommas(taxAmount),
      avatar: (
        <RedeemIcon fontSize="small" sx={{ color: "#a5b4fc", ml: 0.5 }} />
      ),
    },
  ];

  const postToPayment = async (e) => {
    if (token) {
      try {
        const res = await axios.post(
          `${BASE_URL}payment`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const gatewayURL = res.data.gatewayURL;
        window.location.href = gatewayURL;
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <main
      className="flex flex-col w-full justify-between items-center mt-7 p-4
    rounded-xl shadow-normal border border-dashed border-slate300"
    >
      <ul className="flex flex-col w-full justify-center items-center divide-y divide-slate200">
        {orders.map((order, index) => (
          <li
            key={order._id}
            className={`flex flex-col w-full justify-between items-center py-1 ${
              index !== orders.length - 1 ? "mb-2" : ""
            }`}
          >
            <p
              className="flex w-fit justify-center items-center font-demibold ml-auto 
              text-sm text-title min-[385px]:text-[13px] min-[500px]:text-[16px]"
            >
              <EditAttributesIcon
                fontSize="medium"
                sx={{ color: "#047857", ml: 0.5 }}
              />{" "}
              <span>{order.course.title}</span>
            </p>
            <div className="flex w-full justify-between items-center mt-2">
              <span
                className="font-demibold text-[13px] ml-auto text-detail
                bg-slate100 p-1 rounded-md min-[390px]:text-[15px]"
              >
                {addCommas(order.course.priceAfterDiscount)} تومان
              </span>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={(e) => deleteCourseFromCart(e, order.course._id)}
              >
                <ClearIcon fontSize="small" sx={{ color: "#f87171" }} />
                <span className="text-[12px] text-red400 min-[390px]:text-[14px]">
                  حذف دوره
                </span>
              </IconButton>
            </div>
          </li>
        ))}
      </ul>
      <section
        id="totalPrice"
        className="flex flex-col w-full justify-between items-center mt-5"
      >
        <ul className="flex flex-col w-full justify-between items-center divide-y divide-slate200">
          {finalBillingData.map((data, index) => (
            <li
              key={data.id}
              className={`flex w-full justify-between items-center py-3`}
            >
              <div className="w-fit flex justify-center items-center">
                {data.avatar}
                <p className="font-bold text-title text-sm min-[385px]:text-[14px] min-[810px]:text-[16px]">
                  {data.text}
                </p>
              </div>
              <span
                className={`font-demibold text-[13px] mr-auto text-detail
                min-[390px]:text-[15px] p-1 rounded-md ${
                  data.id === "tax"
                    ? "bg-red400 text-white"
                    : data.id === "gift"
                    ? "bg-green400 text-white"
                    : ""
                }`}
              >
                {data.amount} تومان
              </span>
            </li>
          ))}
        </ul>
        <div className="flex w-full justify-between items-center mt-5">
          <IconButton
            aria-label="delete"
            size="small"
            sx={{
              border: "2px solid #f87171",
              borderRadius: "10px",
              transition: "all 0.3s ease",
              color: "#f87171",
              p: 0.8,
              "&:hover": { border: "none", bgcolor: "#f87171", color: "white" },
            }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
          <button
            className="w-full bg-indigo100 mr-2 
          p-2 rounded-[10px] font-demibold text-[14px] text-indigo700
          hover:bg-indigo700 hover:text-white hover:ring-4 ring-indigo200 hover:scale-[0.95]
          hover:rounded-lg transition-all duration-500"
            onClick={postToPayment}
          >
            <PaymentsIcon fontSize="small" sx={{ ml: 0.5 }} />
            مبلغ قابل پرداخت | {addCommas(totalPrice)} تومان
          </button>
        </div>
      </section>
    </main>
  );
}

export default CheckOutBilling;
