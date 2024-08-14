"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollableTabsButtonAuto({
  setShowCourseDescription,
  setShowCourseTitles,
  setShowCourseFAQ,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollToCourseSectionsNav = () => {
    const courseSectionsNav = document.getElementById("course-sections");
    if (courseSectionsNav) {
      courseSectionsNav.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showDescriptionHandler = () => {
    setShowCourseDescription(true);
    setShowCourseTitles(false);
    setShowCourseFAQ(false);
    scrollToCourseSectionsNav();
  };

  const showTitlesHandler = () => {
    setShowCourseTitles(true);
    setShowCourseDescription(false);
    setShowCourseFAQ(false);
    scrollToCourseSectionsNav();
  };

  const showFAQHandler = () => {
    setShowCourseFAQ(true);
    setShowCourseTitles(false);
    setShowCourseDescription(false);
    scrollToCourseSectionsNav();
  };

  const tabs = [
    { id: "description", label: "توضیحات", handler: showDescriptionHandler },
    {
      id: "titles",
      label: "فصل های دوره",
      handler: showTitlesHandler,
    },
    {
      id: "FAQ",
      label: "سوالات متداول",
      handler: showFAQHandler,
    },
  ];

  return (
    <Box
      id="course-section-nav"
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        m: "30px auto 0",
        alignItems: "center",
        position: "sticky",
        top: 0,
        boxShadow: "5px 5px 8px #dfdfdf, -5px -5px 8px #fbfbfb",
        borderRadius: "8px",
        zIndex: 20,
        bgcolor: "whitesmoke",
        "@media(min-width: 830px)": {
          m: "0 auto",
        },
      }}
    >
      <Tabs
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "fit-content",
          justifyContent: "center",
          m: "0 auto",
          borderRadius: "8px",
        }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        TabScrollButtonProps={{ sx: { color: "#334155" } }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            onClick={tab.handler}
            sx={{
              fontFamily: "dana",
              fontWeight: "110",
              color: "#94a3b8",
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
