"use client";

import axios from "axios";
import { BASE_URL } from "../../services/api";
import Cookies from "js-cookie";

function page() {
  const logOutHandler = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    try {
      await axios.put(
        `${BASE_URL}user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      Cookies.remove("token");
      window.location.href = "/";
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <button
        className="w-fit p-2 bg-red400 font-bold text-sm text-white rounded-sm"
        onClick={logOutHandler}
      >
        خروج از حساب کاربری
      </button>
    </div>
  );
}

export default page;
