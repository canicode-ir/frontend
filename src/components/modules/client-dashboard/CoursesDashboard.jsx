"use client";

import Link from "next/link";

//Components
import CourseLicenseAccordion from "../../modules/client-dashboard/modules/CoursesDashboardModules/CourseLicenseAccordion";
import FormDialog from "../../elements/FormDialog";

//Icons and Images
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SmsIcon from "@mui/icons-material/Sms";

function CoursesDashboard({
  userProfile: { course_participate, fullName, course_licenses },
}) {
  return (
    <div className="w-full flex flex-col justify-start items-center text-white mt-7">
      <h4 className="font-bold text-gray100 mr-1 ml-auto mt-5">
        <BubbleChartIcon fontSize="small" sx={{ mr: 0.3 }} />
        دوره هایی که شرکت کرده اید:
      </h4>
      {!course_participate.length ? (
        <ul className="flex flex-col w-full mt-2 justify-between items-center">
          {course_participate.map((course) => (
            <CourseLicenseAccordion
              key={course._id}
              {...course}
              course_licenses={course_licenses}
            />
          ))}
        </ul>
      ) : (
        <div
          className="flex w-full rounded-2xl mt-2 py-6 px-2 
        backdrop-filter backdrop-blur-md bg-white/10"
        >
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="font-regular text-[12px] text-center min-[500px]:text-sm">
              {fullName} عزیز، شما در هیچ دوره ای شرکت نکرده اید 🧐
            </h1>
            <div className="flex flex-col w-full justify-between items-center mt-5 min-[500px]:flex-row">
              <button
                className="w-full bg-indigo500 px-1 py-[6.5px] rounded-[7px] text-[14px]
                transition-all duration-500 hover:opacity-70 min-[500px]:w-fit"
                onClick={() => (window.location.href = "/academy")}
              >
                مشاهده دوره ها
                <ChevronLeftIcon fontSize="small" />
              </button>
              <div className="flex w-full mt-2 min-[500px]:w-fit min-[500px]:my-0">
                <FormDialog />
                <Link
                  className="bg-indigo500
                   px-1 py-[6px] rounded-[7px] text-[14px] mr-auto min-[500px]:ml-auto min-[500px]:mr-2
                  transition-all duration-500 hover:opacity-70"
                  href="sms:+989331651902?body= سلام و وقت بخیر؛ جهت مشاوره آموزشی پیام میدم."
                >
                  <SmsIcon fontSize="small" sx={{ mr: 0.6 }} />
                  ارسال پیامک
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoursesDashboard;
