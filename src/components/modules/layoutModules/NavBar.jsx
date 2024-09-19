"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserCart,
  selectUserCartItems,
} from "../../../../redux/features/cartSlice";

//Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SchoolIcon from "@mui/icons-material/School";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import TransitionsModal from "../../elements/Modal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";

//Images
import logo from "../../../../public/logo/whiteTransparent.svg";

export default function ButtonAppBar({ token, userRole }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const navItems = [
    {
      title: "homePage",
      name: "صفحه اصلی",
      url: "/",
      icon: <HomeIcon fontSize="small" />,
    },
    {
      title: "aboutus",
      name: "درباره ما",
      url: "/aboutus",
      icon: <Diversity2Icon fontSize="small" />,
    },
    {
      title: "academy",
      name: "دوره ها آموزشی",
      url: "/academy",
      icon: <SchoolIcon fontSize="small" />,
    },
    {
      title: "projects",
      name: "فرم درخواست همکاری",
      url: "/cooperation",
      icon: <WorkspacesIcon fontSize="small" />,
    },
    {
      title: "contactus",
      name: "تماس با ما",
      url: "/contact",
      icon: <ContactSupportIcon fontSize="small" />,
    },
    // {
    //   title: "articles",
    //   name: "مقالات آموزشی",
    //   url: "/articles",
    //   icon: <NewspaperIcon fontSize="small" sx={{color: '#d6d3d1'}}/>,
    // },
  ];

  const scrollToContact = () => {
    setIsOpen(false);
    const contactZone = document.getElementById("contact-us");
    const goToTopDiv = document.getElementById("goTotop");
    if (contactZone) {
      contactZone.scrollIntoView({ behavior: "smooth" });
      goToTopDiv.style.display = "block";
    }
  };

  const hamburgerClickHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    const goToTopDiv = document.getElementById("goTotop");
    if (goToTopDiv && isOpen) goToTopDiv.style.display = "block";
    if (!isOpen) goToTopDiv.style.display = "none";
  };

  const hambergurLiClickHandler = () => {
    setIsOpen(false);
    const goToTopDiv = document.getElementById("goTotop");
    if (goToTopDiv) {
      goToTopDiv.style.display = "block";
    }
  };

  const goToUserDashboard = (token) => {
    setIsOpen(false);
    if (token) {
      router.push("/client-dashboard");
    } else {
      router.push("/userAuthentication");
    }
  };

  //connecting RTK
  const { cartItems, loading, error } = useSelector(selectUserCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUserCart());
  }, []);

  return (
    <>
      <Box sx={{ position: "relative", zIndex: 20 }} id="navigation-bar">
        <AppBar position="static">
          <Toolbar className="flex justify-content items-center bg-gradient-to-l from-indigo500 via-indigo400 to-indigo500">
            <Image
              className="hidden w-[110px] min-[415px]:w-[130px] cursor-pointer min-[1000px]:block"
              onClick={() => router.push("/")}
              src={logo}
              width={600}
              height={600}
              alt="logo"
            />
            <IconButton
              className="block mr-0 min-[1000px]:hidden"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={hamburgerClickHandler}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Container className="w-fit mx-auto my-0 justify-center items-center">
              <ul className="hidden w-fit justify-center items-center mx-auto min-[1000px]:flex">
                {navItems.map((item) =>
                  item.url !== "/contact" ? (
                    <Link
                      className="w-fit font-extrabold text-white text-[14px] ml-3 duration-300 
                      last:ml-0 p-1 rounded-min-[1000px] hover:opacity-70"
                      key={item.title}
                      href={`${item.url}`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <li
                      key={item.title}
                      className="w-fit font-extrabold text-white text-[14px] ml-3 duration-300 cursor-pointer 
                      last:ml-0 p-1 rounded-min-[1000px] hover:opacity-70"
                      onClick={scrollToContact}
                    >
                      {item.name}
                    </li>
                  )
                )}
              </ul>
              {pathName !== "/userAuthentication" &&
                pathName !== "/userCheckOtp" && (
                  <Image
                    className="block w-[110px] min-[415px]:w-[130px] max-[383px]:hidden min-[1000px]:hidden"
                    src={logo}
                    width={600}
                    height={600}
                    alt="logo"
                  />
                )}
            </Container>
            {userRole === "admin" && (
              <IconButton
                className="font-title text-white text-center ml-2"
                onClick={() => router.push("/admin-panel")}
              >
                <AdminPanelSettingsIcon />
              </IconButton>
            )}
            <div className="relative w-fit flex justify-center items-center">
              <Button
                className="font-title text-inherit text-center ml-2 duration-400 backdrop-blur-2xl bg-white/20 
            hover:bg-white/40"
                onClick={() => (window.location.href = "/cart")}
              >
                <ShoppingCartIcon />
              </Button>
              {!loading && cartItems.orders && cartItems.orders.length > 0 && (
                <span
                  className="absolute -bottom-2 -right-2 w-6 h-6 flex justify-center items-center
                bg-indigo500 font-bold text-white text-sm rounded-full"
                >
                  {cartItems.orders.length}
                </span>
              )}
            </div>
            {token ? (
              <IconButton
                className="font-title text-inherit text-center ml-2 duration-400 backdrop-blur-2xl bg-white/20 
            hover:bg-white/40"
                onClick={() => router.push("/client-dashboard")}
              >
                <PersonIcon />
              </IconButton>
            ) : (
              <Button
                className="font-title text-inherit duration-400 backdrop-blur-2xl bg-white/20 
            hover:bg-white/40"
                onClick={() => router.push("/userAuthentication")}
              >
                ورود | ثبت نام
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Container
          className="open:absolute open:flex flex-col w-[240px] h-0 open:h-dvh translate-x-full mr-0 justify-center
          overflow-y-auto backdrop-filter backdrop-blur-lg bg-indigo500/10
        transition-all duration-500 ease-in open:translate-x-0 open:border-l-[2px] border-gray300 min-[1000px]:hidden"
          open={isOpen}
        >
          <ul className="flex flex-col w-fit h-fit justify-center items-center ml-auto mt-5">
            {navItems.map((item) =>
              item.url !== "/contact" ? (
                <Link
                  className="w-fit font-bold text-sm ml-auto text-white p-1 rounded-min-[1000px] ml-auto my-3 hover:opacity-70"
                  onClick={hambergurLiClickHandler}
                  key={item.title}
                  href={`${item.url}`}
                >
                  {item.icon} {item.name}
                </Link>
              ) : (
                <li
                  key={item.title}
                  className="w-fit font-bold text-sm ml-auto text-white p-1 rounded-min-[1000px] ml-auto my-3 hover:opacity-70"
                  onClick={scrollToContact}
                >
                  {item.icon} {item.name}
                </li>
              )
            )}
          </ul>
          <div className="w-full h-[1px] bg-indigo50 mt-5"></div>
          <section className="flex flex-col w-full mt-5" id="isUserLoggedIn">
            <button
              className="w-full backdrop-filter backdrop-blur-sm bg-indigo700/30 p-2 rounded-lg text-center 
              text-white transition-all duration-500 hover:scale-[0.97] hover:opacity-70"
              onClick={goToUserDashboard}
            >
              <PersonPinIcon fontSize="small" sx={{ ml: 0.3 }} />
              {token ? "ورود به پنل کاربری" : "وارد پنل کاربری خود شوید"}
            </button>
          </section>
          <h5 className="w-full mt-5 mb-auto font-regular text-center p-2 rounded-lg text-[14px] text-gray800 backdrop-filter backdrop-blur-sm bg-white/30">
            <FilterTiltShiftIcon
              className="animate-spin"
              fontSize="small"
              sx={{ ml: 0.3 }}
            />
            پشتیبان تلفنی: 09331651902
          </h5>
        </Container>
      </Box>
      <TransitionsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
