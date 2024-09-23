"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { styled, useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserCart,
  selectUserCartItems,
} from "../../../../redux/features/cartSlice";
import axios from "axios";
import { BASE_URL } from "../../../services/api";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import FeedIcon from "@mui/icons-material/Feed";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HubIcon from "@mui/icons-material/Hub";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

//Components
import ToastContainerComponent from "../../elements/ToastContainer";
import MainDashboard from "../../modules/client-dashboard/MainDashboard";
import CoursesDashboard from "../../modules/client-dashboard/CoursesDashboard";
import LicencesDashboard from "../../modules/client-dashboard/LicencesDashboard";
import PaymentsDashboard from "../../modules/client-dashboard/PaymentsDashboard";
import Loading from "../../elements/Loading";

//Images
import logo from "../../../../public/logo/whiteTransparent.svg";

//Utils and Functions
import Rtl from "../../../utils/Rtl";
import { notify } from "../../../utils/Toast";

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const navItems = [
  {
    title: "homePage",
    name: (
      <span className="font-demibold text-detail text-sm min-[1300px]:text-white">
        صفحه اصلی
      </span>
    ),
    url: "/",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    title: "aboutus",
    name: (
      <span className="font-demibold text-detail text-sm min-[1300px]:text-white">
        درباره ما
      </span>
    ),
    url: "/aboutus",
    icon: <Diversity2Icon fontSize="small" />,
  },
  {
    title: "academy",
    name: (
      <span className="font-demibold text-detail text-sm min-[1300px]:text-white">
        دوره های آموزشی
      </span>
    ),
    url: "/academy",
    icon: <SchoolIcon fontSize="small" />,
  },
  {
    title: "articles",
    name: (
      <span className="font-demibold text-detail text-sm min-[1300px]:text-white">
        مقالات (به زودی ...)
      </span>
    ),
    url: "#",
    icon: <FeedIcon fontSize="small" />,
  },
];

/////Today-Date
const date = new Date();
// Define options for formatting
const weekdayOptions = { weekday: "long", timeZone: "Asia/Tehran" };
const dayOptions = { day: "numeric", timeZone: "Asia/Tehran" };
const monthOptions = { month: "long", timeZone: "Asia/Tehran" };
const yearOptions = { year: "numeric", timeZone: "Asia/Tehran" };
// Create formatters for each component
const weekdayFormatter = new Intl.DateTimeFormat("fa-IR", weekdayOptions);
const dayFormatter = new Intl.DateTimeFormat("fa-IR", dayOptions);
const monthFormatter = new Intl.DateTimeFormat("fa-IR", monthOptions);
const yearFormatter = new Intl.DateTimeFormat("fa-IR", yearOptions);
// Get each component
const weekday = weekdayFormatter.format(date);
const day = dayFormatter.format(date);
const month = monthFormatter.format(date);
const year = yearFormatter.format(date);

// Construct the desired format
const formattedDate = `${weekday}، ${day} ${month} ${year}`;

export default function MiniDrawer({ userProfile, authToken }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isInMainDashboard, setIsInMainDashboard] = React.useState(false);
  const [isInCoursesDashboard, setIsInCoursesDashboard] = React.useState(false);
  const [isInLicencesDashboard, setIsInLicencesDashboard] =
    React.useState(false);
  const [isInPaymentsDashboard, setIsInPaymentsDashboard] =
    React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const token = authToken;

  //Connecting RTK
  const { cartItems, loading, error } = useSelector(selectUserCartItems);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUserCart());
    setIsInMainDashboard(!isInMainDashboard);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logOutHandler = async (e) => {
    e.preventDefault();
    notify("در حال خروج، شکیبا باشید", "success");
    setTimeout(async () => {
      try {
        await axios.put(
          `${BASE_URL}user/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        notify("در حال انتقال به صفحه اصلی", "success");
        Cookies.remove("token");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } catch (error) {
        console.log(error.response);
      }
    }, 1000);
  };

  const goToMainDashboard = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsInMainDashboard(true);
      setIsInCoursesDashboard(false);
      setIsInLicencesDashboard(false);
      setIsInPaymentsDashboard(false);
    }, 1000);
  };
  const goToCoursesDashboard = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsInCoursesDashboard(true);
      setIsInMainDashboard(false);
      setIsInLicencesDashboard(false);
      setIsInPaymentsDashboard(false);
    }, 1000);
  };
  const goToLicencesDashboard = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsInLicencesDashboard(true);
      setIsInCoursesDashboard(false);
      setIsInMainDashboard(false);
      setIsInPaymentsDashboard(false);
    }, 1000);
  };
  const goToPaymentsDashboard = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsInPaymentsDashboard(true);
      setIsInCoursesDashboard(false);
      setIsInMainDashboard(false);
      setIsInLicencesDashboard(false);
    }, 1000);
  };

  const dashboardNavItems = [
    {
      title: "dashboard-main-page",
      state: isInMainDashboard,
      name: "داشبورد کاربری",
      icon: <HubIcon fontSize="small" />,
      handler: goToMainDashboard,
    },
    {
      title: "participated-courses",
      state: isInCoursesDashboard,
      name: "دوره ها خریداری شده",
      icon: <OndemandVideoIcon fontSize="small" />,
      handler: goToCoursesDashboard,
    },
    {
      title: "licences",
      state: isInLicencesDashboard,
      name: "لایسنس ها",
      icon: <QrCodeScannerIcon fontSize="small" />,
      handler: goToLicencesDashboard,
    },
    {
      title: "user-payments",
      state: isInPaymentsDashboard,
      name: "پرداختی های شما",
      icon: <ReceiptLongIcon fontSize="small" />,
      handler: goToPaymentsDashboard,
    },
  ];

  return (
    <Rtl>
      <Box sx={{ position: "relative", display: "flex" }}>
        <CssBaseline />
        <AppBar
          className="bg-gradient-to-l from-indigo500 via-indigo400 to-indigo500"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          position="fixed"
          open={open}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  width: "fit-content",
                  mr: "auto",
                  ml: "0",
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <div className="hidden w-fit ml-auto mr-0 my-0 justify-center items-center min-[1300px]:flex">
            <ul className="flex w-fit justify-center items-center mx-auto">
              {navItems.map((item) =>
                item.url !== "/contact" ? (
                  <button
                    className="w-fit font-extrabold text-white text-[14px] ml-3 duration-300 
                      last:ml-0 p-1 rounded-min-[1000px] hover:opacity-70"
                    key={item.title}
                    onClick={() => (window.location.href = item.url)}
                  >
                    {item.name}
                  </button>
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
          </div>
          <Image
            className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110px] 
            min-[415px]:w-[130px] cursor-pointer min-[350px]:block max-[560px]:open:hidden"
            onClick={() => router.push("/")}
            src={logo}
            width={600}
            height={600}
            alt="logo"
            open={open}
          />
          <section className="flex w-fit items-center mr-auto ml-7">
            <div
              className="relative w-fit flex justify-center items-center transition-all
             duration-400 backdrop-blur-2xl bg-white/20 hover:bg-white/40 rounded-md min-[1300px]:ml-3"
            >
              <Button
                className="font-title text-inherit text-center"
                onClick={() => (window.location.href = "/cart")}
              >
                <ShoppingCartIcon sx={{ color: "white" }} />
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
            <div
              className="hidden w-fit flex justify-center items-center transition-all
             duration-400 p-[6px] backdrop-blur-2xl bg-white/20 rounded-md min-[1300px]:block"
            >
              <button className="text-sm font-demibold" onClick={logOutHandler}>
                <PowerSettingsNewIcon />
                خروج
              </button>
            </div>
          </section>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {dashboardNavItems.map((item, index) => (
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                  onClick={item.handler}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 1,
                          }
                        : {
                            mr: "auto",
                          },
                      item.state && { color: "#818cf8" },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary=<span
                      className={`font-demibold text-detail text-sm ${item.state && "text-indigo400"}`}
                    >
                      {item.name}
                    </span>
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                      item.state && { color: "#818cf8" },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List
            sx={{
              display: "block",
              "@media(min-width: 1300px)": { display: "none" },
            }}
          >
            {navItems.map((item, index) => (
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => (window.location.href = item.url)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: `${open ? "initial" : "center"}`,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      mr: `${open ? "10px" : "auto"}`,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: `${open ? 1 : 0}`,
                      fontFamily: "dana",
                      fontWeight: 120,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItemButton
              sx={{
                width: "100%",
                m: "0 auto",
                borderRadius: "8px",
                color: "#f87171",
                fontFamily: "dana",
                fontWeight: "110",
              }}
              onClick={open ? logOutHandler : null}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: `${open ? "10px" : "auto"}`,
                }}
              >
                <PowerSettingsNewIcon
                  fontSize="small"
                  sx={{ ml: 0.5, color: "#f87171" }}
                />
              </ListItemIcon>
              <ListItemText
                primary=<span className="font-demibold text-sm text-red400">
                  خروج از پنل کاربری
                </span>
                sx={{ opacity: `${open ? 1 : 0}` }}
              />
            </ListItemButton>
          </List>
          <Divider className="block min-[1300px]:hidden" />
          <List
            sx={{
              display: "block",
            }}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: `${open ? "initial" : "center"}`,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    mr: `${open ? "10px" : "auto"}`,
                  }}
                >
                  <SupportAgentIcon
                    fontSize="small"
                    sx={{ color: "#0284c7" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary=<Link
                    className="font-demibold text-sm text-sky600"
                    href="https://t.me/websitesupport_724"
                  >
                    پشتیبان تلگرام
                  </Link>
                  sx={{
                    opacity: `${open ? 1 : 0}`,
                    fontFamily: "dana",
                    fontWeight: 120,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <div
          component="main"
          className="w-full bg-gradient-to-b from-indigo950 via-indigo800 to-indigo600
           h-screen py-6 px-4"
        >
          <DrawerHeader />
          <div
            id="user-details"
            className="w-full flex backdrop-filter backdrop-blur-md bg-white/10 justify-between items-center
               px-2 py-4 text-sm text-slate200 rounded-2xl max-[550px]:open:hidden"
            open={open}
          >
            <div className="flex w-full items-center justify-between items-center min-[600px]:w-fit">
              <h2 className="flex items-center font-demibold text-[13px] min-[430px]:text-sm">
                <PersonIcon fontSize="small" sx={{ mr: 0.3 }} />
                {userProfile.fullName}
              </h2>
              <h2 className="block font-demibold mr-4">
                <PhoneAndroidIcon fontSize="small" sx={{ mr: 0.3 }} />
                {userProfile.mobile}
              </h2>
            </div>
            {/* <span className="hidden font-regular text-[10px] min-[380px]:block">
              {formattedDate}
            </span> */}
          </div>
          {isLoading ? (
            <Loading />
          ) : isInMainDashboard ? (
            <MainDashboard />
          ) : isInCoursesDashboard ? (
            <CoursesDashboard />
          ) : isInLicencesDashboard ? (
            <LicencesDashboard />
          ) : (
            <PaymentsDashboard />
          )}
        </div>
      </Box>
      <ToastContainerComponent />
    </Rtl>
  );
}
