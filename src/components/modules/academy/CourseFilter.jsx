"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollableTabsButtonAuto({
  setIsAllCourses,
  setIsJuniorCourses,
  setIsMidLevelCourses,
  setIsSeniorCourses,
  setIsBootcamp,
}) {
  const [value, setValue] = React.useState(0);

  const goToCourseFilter = (e) => {
    e.preventDefault();
    const academy = document.getElementById("academy");
    if (academy) {
      academy.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);

    // Using setTimeout to delay scrolling
    setTimeout(() => {
      goToCourseFilter(e);
    }, 0); // Adjust time as necessary (0 allows the state to update)

    switch (newValue) {
      case 0:
        showAllCourses();
        break;
      case 1:
        showBootcamps();
        break;
      case 2:
        showJuniorCourses();
        break;
      case 3:
        showMidLevelCourses();
        break;
      case 4:
        showSeniorCourses();
        break;
      default:
        null;
        break;
    }
  };

  const showAllCourses = () => {
    setIsAllCourses(true);
    setIsJuniorCourses(false);
    setIsMidLevelCourses(false);
    setIsSeniorCourses(false);
    setIsBootcamp(false);
  };

  const showBootcamps = () => {
    setIsBootcamp(true);
    setIsSeniorCourses(false);
    setIsJuniorCourses(false);
    setIsAllCourses(false);
    setIsMidLevelCourses(false);
  };

  const showJuniorCourses = () => {
    setIsJuniorCourses(true);
    setIsAllCourses(false);
    setIsMidLevelCourses(false);
    setIsSeniorCourses(false);
    setIsBootcamp(false);
  };

  const showMidLevelCourses = () => {
    setIsMidLevelCourses(true);
    setIsJuniorCourses(false);
    setIsAllCourses(false);
    setIsSeniorCourses(false);
    setIsBootcamp(false);
  };

  const showSeniorCourses = () => {
    setIsSeniorCourses(true);
    setIsJuniorCourses(false);
    setIsAllCourses(false);
    setIsMidLevelCourses(false);
    setIsBootcamp(false);
  };

  const tabs = [
    { label: "همه دوره ها" },
    { label: "بوت کمپ فرانت اند" },
    { label: "دوره ها مقدماتی" },
    { label: "دوره ها میدلول" },
    { label: "دوره ها متخصص فرانت" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        m: "30px auto 0",
        alignItems: "center",
        p: "0 24px",
      }}
    >
      <Tabs
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "fit-content",
          justifyContent: "center",
          bgcolor: "#f9fafb",
          m: "0 auto",
          borderRadius: "8px",
        }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        TabScrollButtonProps={{ sx: { color: "#3730a3" } }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              fontFamily: "dana",
              fontWeight: "110",
              color: "#a5b4fc",
              fontSize: "13px",
              p: 1,
              m: "0 0 0 10px",
              borderRadius: "8px",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
