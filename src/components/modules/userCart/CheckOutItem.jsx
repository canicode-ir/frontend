"use client";

import axios from "axios";
import { BASE_URL } from "../../../services/api";
import { useDispatch } from "react-redux";
import { fetchUserCart } from "../../../../redux/features/cartSlice";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

//Functions
import { notify } from "../../../utils/Toast";
import { addCommas } from "../../../helpers/functions";

//Icons & Images
import DeleteIcon from "@mui/icons-material/Delete";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

function CheckOutItem({
  orderData: { _id, image, price, title, level, name },
  token,
}) {
  const dispatch = useDispatch();

  const navBar = document.getElementById("navigation-bar");

  const imageUrl = "https://canicode-app.storage.iran.liara.space/";
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
        if (navBar) navBar.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        notify("خطایی در سیستم رخ داده است، لطفاً مجدد امتحان کنید", "error");
      }
    }
  };

  return (
    <main
      className={`flex flex-col w-full justify-between items-center mt-7 p-4
    rounded-xl shadow-normal`}
    >
      <div className="flex w-full justify-between items-center">
        <Image
          className={`${
            name === "bootcamp"
              ? "w-[30%] aspect-video rounded-lg shadow-normal"
              : "w-[40px] p-1"
          } aspect-square`}
          src={`${imageUrl}${image}`}
          width={600}
          height={600}
        />
        <p
          className={`${
            name === "bootcamp"
              ? "hidden"
              : "block w-fit mr-1 ml-auto font-bold text-sm text-title min-[350px]:text-md min-[400px]:text-lg"
          }`}
        >
          {title}
        </p>
      </div>
      <div
        className={`${
          name === "bootcamp"
            ? "hidden"
            : "flex w-full justify-between items-center mt-2"
        }`}
      >
        <span className="bg-indigo50 text-indigo500 text-[11px] p-1 rounded-sm min-[390px]:text-[14px]">
          {level === "starter"
            ? "سطح مقدماتی"
            : level === "mid-level"
            ? "سطح میدلول"
            : level === "advanced-level"
            ? "سطح ارشد"
            : "بوت کمپ فرانت"}
        </span>
        <h5 className="font-demibold text-sm text-detail min-[390px]:text-[15px]">
          {addCommas(price)} تومان
        </h5>
      </div>
      <div
        className={`w-full h-[1px] opacity-40 mt-4 rounded-full bg-slate300`}
      ></div>
      <section
        id="btn"
        className={`${"flex w-full justify-between items-center mt-4"}`}
      >
        <IconButton
          aria-label="delete"
          size="small"
          onClick={(e) => deleteCourseFromCart(e, _id)}
        >
          <DeleteIcon fontSize="small" sx={{ color: "#f87171" }} />
          <span className="text-[12px] text-red400 min-[390px]:text-[14px]">
            حذف از سبد خرید
          </span>
        </IconButton>
        <Link
          href="/academy"
          className="flex w-fit justify-center items-center text-[12px] text-indigo400"
        >
          <ManageSearchIcon fontSize="small" />
          <span className="mr-1 min-[390px]:text-[14px]">سایر دوره ها</span>
        </Link>
      </section>
    </main>
  );
}

export default CheckOutItem;
