"use client";

import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../services/api";
import useSWR from "swr";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = Cookies.get("token");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const result = await axios.get(`${BASE_URL}course?page=1&limit=20`);
      return result.data.result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses().then((res) => setCourses(res));
  }, []);

  return (
    <AuthContext.Provider value={{ token, courses }}>
      {children}
    </AuthContext.Provider>
  );
};
