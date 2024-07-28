"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import TransitionsModal from "../../elements/Modal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

//Images
import logo from "../../../../public/logo/whiteTransparent.svg";

export default function ButtonAppBar({ token }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const navItems = [
    { title: "homePage", name: "صفحه اصلی", url: "/", icon: <HomeIcon /> },
    {
      title: "aboutus",
      name: "درباره ما",
      url: "/aboutus",
      icon: <Diversity2Icon />,
    },
    {
      title: "academy",
      name: "دوره ها آموزشی",
      url: "/academy",
      icon: <SchoolIcon />,
    },
    {
      title: "projects",
      name: "فرم درخواست همکاری",
      url: "/cooperation",
      icon: <WorkspacesIcon />,
    },
    {
      title: "contactus",
      name: "تماس با ما",
      url: "/contact",
      icon: <ContactSupportIcon />,
    },
    {
      title: "articles",
      name: "مقالات آموزشی",
      url: "/articles",
      icon: <NewspaperIcon />,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ position: "relative", zIndex: 20 }}>
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
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Container className="w-fit mx-auto my-0 justify-center items-center">
            <ul className="hidden w-fit justify-center items-center mx-auto min-[1000px]:flex">
              {navItems.map((item) => (
                <Link
                  className="w-fit font-extrabold text-white text-[14px] ml-3 duration-300 
                      last:ml-0 p-1 rounded-min-[1000px] hover:opacity-70"
                  key={item.title}
                  href={`${item.url}`}
                >
                  {item.name}
                </Link>
              ))}
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
          <Button
            className="font-title text-inherit text-center ml-2 duration-400 backdrop-blur-2xl bg-white/20 
            hover:bg-white/40"
          >
            <ShoppingCartIcon />
          </Button>
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
        className="hidden open:absolute open:flex w-[240px] h-screen translate-x-full mr-0 justify-center bg-white overflow-y-auto
        items-center duration-700 ease-in open:translate-x-0 open:border-l-[2px] border-gray300 min-[1000px]:hidden"
        open={isOpen}
      >
        <ul className="flex flex-col w-fit justify-center items-center mx-auto mb-auto mt-5">
          {navItems.map((item) => (
            <Link
              className="w-fit font-extrabold text-gray600 p-1 rounded-min-[1000px] ml-auto my-3 hover:opacity-70"
              onClick={() => setIsOpen(false)}
              key={item.title}
              href={`${item.url}`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </ul>
      </Container>
      <TransitionsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
}
