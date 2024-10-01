"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { BASE_URL } from "../../../../../services/api";
import { notify } from "../../../../../utils/Toast";
import axios from "axios";
import { fetchUserCart } from "../../../../../../redux/features/cartSlice";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StopIcon from "@mui/icons-material/Stop";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import buttonLoading from "../../../../../../public/general/buttonLoading.gif";

function NextCourseCard({
  name,
  title,
  level,
  _id,
  cartItems,
  isInCartCoursesIds,
  dispatch,
}) {
  const [cardButtonIsLoading, setCardButtonIsLoading] = useState(false);

  const searchParams = useSearchParams();

  const goToManagerPosts = () => {
    const managerPosts = document.getElementById("manager-posts");
    if (managerPosts) {
      managerPosts.scrollIntoView({ behavior: "smooth" });
      managerPosts.classList.add("manager-posts"); // Add the animation
      // Use a timeout to remove the class after 5 seconds
      setTimeout(() => {
        managerPosts.classList.remove("manager-posts");
      }, 5000);
    } else {
      return null;
    }
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const addCourseToCart = async (e, id) => {
    e.preventDefault();
    setCardButtonIsLoading(true);
    const token = Cookies.get("token");
    setTimeout(async () => {
      if (token) {
        try {
          await axios.post(
            `${BASE_URL}cart/${id}`,
            {
              courseId: id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          goToManagerPosts();
          dispatch(fetchUserCart());
          setTimeout(() => {
            setCardButtonIsLoading(false);
          }, 500);
          notify("دوره با موفقیت به سبد خرید افزوده شد", "success");
        } catch (error) {
          if (error.response.status === 400) {
            notify("دوره در سبد خرید موجود است", "error");
          } else {
            notify("لطفاً مجدد تلاش فرمایید", "error");
          }
        }
      }
    }, 1000);
  };

  const deleteCourseFromCart = async (e, id) => {
    e.preventDefault();
    setCardButtonIsLoading(true);
    const token = Cookies.get("token");
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
        setTimeout(() => {
          setCardButtonIsLoading(false);
        }, 500);
        notify("دوره از سبد خرید حذف شد", "success");
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <li
      className={`flex flex-col w-full justify-between bg-gradient-to-l
  ${
    name === "htmlcss"
      ? "from-red700 via-red500 to-red700"
      : name === "javascript"
        ? "from-yellow700 via-yellow500 to-yellow700"
        : name === "reactjs"
          ? "from-sky700 via-sky500 to-sky700"
          : name === "nextjs"
            ? "from-slate800 via-slate600 to-slate800"
            : name === "materialUi"
              ? "from-blue700 via-blue500 to-blue700"
              : name === "tailwindcss"
                ? "from-emerald800 via-emerald600 to-emerald800"
                : "from-neutral950 via-neutral700 to-neutral950"
  }
   shadow-inset my-2 items-center p-2 rounded-lg transition-all duration-600 
  hover:cursor-pointer hover:bg-gradient-to-b`}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col w-fit items-center md:flex-row">
          <span className="font-bold items-center text-[12px] min-[410px]:text-sm">
            <StopIcon
              className="animate-pulse"
              fontSize="small"
              sx={{
                ml: 0.3,
                display: "none",
                "@media(min-width: 370px)": { display: "inline" },
              }}
            />
            {title} |
          </span>
          <span className="font-light text-[12px] ml-auto mr-2 mt-2 md:my-0 md:text-sm">
            {level === "starter"
              ? "مقدماتی"
              : level === "mid-level"
                ? "میدلول"
                : "سنیور"}
          </span>
        </div>
        {cartItems.orders &&
        isInCartCoursesIds.length > 0 &&
        isInCartCoursesIds.includes(_id) ? (
          <>
            <button
              className="p-1 md:hidden"
              onClick={(e) => deleteCourseFromCart(e, _id)}
            >
              {cardButtonIsLoading ? (
                <Image
                  className="w-5"
                  src={buttonLoading}
                  width={600}
                  height={600}
                  alt="loading"
                />
              ) : (
                <DeleteOutlineIcon fontSize="small" />
              )}
            </button>
            <button
              className="hidden md:block font-regular backdrop-filter backdrop-blur-md bg-white/10
    text-[13px] px-1 py-2 rounded-md transition-all duration-400 hover:bg-white/30"
              onClick={(e) => deleteCourseFromCart(e, _id)}
            >
              {cardButtonIsLoading ? (
                <Image
                  className="w-5"
                  src={buttonLoading}
                  width={600}
                  height={600}
                  alt="loading"
                />
              ) : (
                "حذف از سبد خرید"
              )}
            </button>
          </>
        ) : (
          <>
            <button
              className="p-1 md:hidden"
              onClick={(e) => addCourseToCart(e, _id)}
            >
              {cardButtonIsLoading ? (
                <Image
                  className="w-5"
                  src={buttonLoading}
                  width={600}
                  height={600}
                  alt="loading"
                />
              ) : (
                <AddShoppingCartIcon fontSize="small" />
              )}
            </button>
            <button
              className="hidden md:block font-regular backdrop-filter backdrop-blur-md bg-white/10
    text-[13px] px-1 py-2 rounded-md transition-all duration-400 hover:bg-white/30"
              onClick={(e) => addCourseToCart(e, _id)}
            >
              {cardButtonIsLoading ? (
                <Image
                  className="w-5"
                  src={buttonLoading}
                  width={600}
                  height={600}
                  alt="loading"
                />
              ) : (
                "افزودن به سبد خرید"
              )}
            </button>
          </>
        )}
      </div>
      <div className="w-[95%] mx-auto my-4 h-[1px] bg-gray300"></div>
      <div className="flex w-full justify-between items-center">
        <button
          className="font-light text-[12px] min-[500px]:text-sm transition-all duration-400 
      hover:font-demibold hover:text-indigo100"
          onClick={() =>
            (window.location.href =
              `/academy/course-details/${name}` +
              "?" +
              createQueryString("cId", `${_id}`))
          }
        >
          <MoreVertIcon fontSize="small" sx={{ ml: 0.3 }} />
          جزئیات این دوره
        </button>
        <button
          className="font-light text-[12px] min-[500px]:text-sm transition-all duration-400 
      hover:font-demibold hover:text-indigo100"
          onClick={() => (window.location.href = "/academy")}
        >
          همه دوره ها
          <FirstPageIcon fontSize="small" sx={{ mr: 0.3 }} />
        </button>
      </div>
    </li>
  );
}

export default NextCourseCard;
