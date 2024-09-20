"use client";

import { usePathname } from "next/navigation";

//Icons
import TodayIcon from "@mui/icons-material/Today";

function Today() {
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

  const pathName = usePathname();

  return (
    <>
      {pathName !== "/client-dashboard" && (
        <div
          className="flex w-full justify-between items-center p-3 bg-purple50 rounded-b-lg text-sm
    font-demibold text-indigo700"
        >
          <span>
            <TodayIcon fontSize="small" sx={{ m: "0 0 0 5px" }} />
            تاریخ امروز:{" "}
          </span>
          <span>{formattedDate}</span>
        </div>
      )}
    </>
  );
}

export default Today;
