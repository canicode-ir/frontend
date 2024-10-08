import Link from "next/link";

//Components
import FormDialog from "../../elements/FormDialog";
import NextCourseToLearnSuggestion from "./modules/mainDashboardModules/NextCourseToLearnSuggestion";
import NextCourseCard from "./modules/mainDashboardModules/NextCourseCard";

//Icons and Images
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import MessageIcon from "@mui/icons-material/Message";
import DiscountIcon from "@mui/icons-material/Discount";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SmsIcon from "@mui/icons-material/Sms";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function MainDashboard({
  userProfile,
  userLevel,
  goToCoursesDashboard,
  cart,
  courses,
  dispatch,
  cartItems,
  isInCartCoursesIds,
  coursesByLevel,
}) {
  return (
    <div className="w-full flex flex-col justify-start items-center text-white mt-7">
      <h4 className="font-bold text-gray100 mr-1 ml-auto mt-5">
        <BubbleChartIcon fontSize="small" sx={{ mr: 0.3 }} />
        دفتر کار شما:
      </h4>
      <div className="flex flex-col w-full justify-between items-center min-[900px]:flex-row">
        <div
          id="manager-posts"
          className="w-full flex flex-col backdrop-filter backdrop-blur-md bg-white/10 justify-between items-center
               px-2 py-4 mt-2 text-sm text-slate200 rounded-2xl min-[900px]:w-full ml-2 max-[900px]:mx-0"
        >
          <h6 className="font-demibold text-md ml-auto min-[400px]:mx-auto">
            <MessageIcon fontSize="small" sx={{ mr: 0.6 }} />
            پیام مدیر برای شما |
          </h6>
          <p className="mt-2 font-light text-[12px] px-1 ml-auto min-[400px]:mx-auto">
            {cart.orders.length
              ? `${cart.orders.length} دوره در سبد خرید موجود است.`
              : "پیامی از سمت مدیر برای شما ارسال نشده است."}
            {cart.orders.length > 0 && (
              <button
                className="font-demibold text-white rounded-md mr-2 bg-gradient-to-l
                 from-indigo800 via-indigo700 to-indigo600 p-1 transition-all duration-500 hover:bg-gradient-to-r"
                onClick={() => (window.location.href = "/cart")}
              >
                تکمیل خرید
              </button>
            )}
          </p>
        </div>
        <div
          id="manager-discount-code"
          className="w-full flex flex-col backdrop-filter backdrop-blur-md bg-white/10 justify-between items-center
               px-2 py-4 mt-2 text-sm text-slate200 rounded-2xl min-[900px]:w-full"
        >
          <h6 className="font-demibold text-md ml-auto min-[400px]:mx-auto">
            <DiscountIcon fontSize="small" sx={{ mr: 0.6 }} />
            کد تخفیف برای شما |
          </h6>
          <p className="mt-2 font-light text-[12px] px-1 ml-auto min-[400px]:mx-auto">
            در حال حاضر، کد تخفیفی برای شما صادر نشده است.
          </p>
        </div>
      </div>
      <section
        id="my-courses"
        className="flex flex-col backdrop-filter backdrop-blur-md bg-white/10 px-2 py-4 mt-2
         justify-between items-center w-full rounded-xl"
      >
        <div className="flex w-full justify-between items-center">
          <h4 className="ml-auto w-fit">
            <PlaylistAddCheckIcon fontSize="small" sx={{ mr: 0.6 }} />
            دوره هایی که شرکت کرده اید |
          </h4>
        </div>
        {userProfile.course_participate.length ? (
          <ul className="flex flex-col w-full mt-4">
            {userProfile.course_participate.map((course) => (
              <li
                key={course._id}
                className={`flex w-full justify-between items-center 
              rounded-xl py-3 px-2 mb-3 transition-all duration-400 bg-gradient-to-b ${
                course.name === "htmlcss"
                  ? "from-red600 to-red400"
                  : course.name === "javascript"
                    ? "from-yellow600 to-yellow400"
                    : course.name === "reactjs"
                      ? "from-sky600 to-sky400"
                      : course.name === "nextjs"
                        ? "from-slate700 to-slate500"
                        : course.name === "tailwindcss"
                          ? "from-emerald700 to-emerald500"
                          : course.name === "materialUi"
                            ? "from-blue600 to-blue400"
                            : course.name === "github"
                              ? "from-gray600 to-gray400"
                              : "from-indigo700 to-indigo400"
              } text-white text-sm cursor-pointer hover:scale-[0.98] hover:opacity-80`}
              >
                <span className="font-demibold text-[12px] min-[390px]:text-sm">
                  {course.title}
                </span>
                <span className="font-light text-[12px] min-[390px]:text-sm">
                  {course.duration}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col w-full justify-center items-center">
            <h5 className="flex flex-col w-fit font-light text-sm text-justify p-3 mt-1 min-[492px]:ml-auto">
              {userProfile.fullName} عزیز 💜 ، شما هنوز در هیچ دوره ای شرکت
              نکرده اید. جهت مشاوره آموزشی برای شروع از این طریق با ما در ارتباط
              باشید.{" "}
              <button
                className="font-bold text-md text-sky700 text-violet300 transition-all duration-500
                 ml-auto mt-1 hover:text-violet100"
                onClick={() => (window.location.href = "/academy")}
              >
                مشاهده دوره ها
                <ChevronLeftIcon fontSize="small" />
              </button>
            </h5>
            <div className="flex w-full justify-between items-center mt-2">
              <FormDialog />
              <Link
                className="bg-indigo500 px-1 py-[6px] rounded-[7px] text-[14px] mr-auto min-[500px]:ml-auto min-[500px]:mr-2
                transition-all duration-500 hover:opacity-70"
                href="sms:+989331651902?body= سلام و وقت بخیر؛ جهت مشاوره آموزشی پیام میدم."
              >
                <SmsIcon fontSize="small" sx={{ mr: 0.6 }} />
                ارسال پیامک
              </Link>
            </div>
          </div>
        )}
        <div
          id="next-course-suggestion"
          className="flex w-full justify-between items-center mt-7"
        >
          <h6
            className="font-demibold bg-gradient-to-l from-indigo800 via-indigo700 to-indigo600
          p-1 rounded-lg text-[13px]"
          >
            <LiveHelpIcon fontSize="small" sx={{ mr: 0.6 }} />
            دوره های پیشنهادی بعدی؟
          </h6>
        </div>
        <ul className="w-full flex flex-col justify-between items-center py-2 mt-1">
          {!userProfile.course_participate.length ? (
            courses.map(
              (course) =>
                course.level === "starter" && (
                  <NextCourseCard
                    key={course._id}
                    {...course}
                    cartItems={cartItems}
                    isInCartCoursesIds={isInCartCoursesIds}
                    dispatch={dispatch}
                  />
                )
            )
          ) : (
            <NextCourseToLearnSuggestion
              userLevel={userLevel}
              courses={courses}
              userProfile={userProfile}
              coursesByLevel={coursesByLevel}
              cartItems={cartItems}
              isInCartCoursesIds={isInCartCoursesIds}
              dispatch={dispatch}
            />
          )}
        </ul>
      </section>
    </div>
  );
}

export default MainDashboard;
