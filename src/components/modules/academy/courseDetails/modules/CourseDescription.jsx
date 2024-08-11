"use client";

import { useState } from "react";

//Images & Icons
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import CloseIcon from "@mui/icons-material/Close";

function CourseDescription({ data: name }) {
  const [showMore, setShowMore] = useState(false);
  const items = [
    {
      id: "whatis?",
      title: `${
        name === "htmlcss"
          ? "HTML و CSS"
          : name === "javascript"
          ? "JAVASCRIPT"
          : name === "reactjs"
          ? "REACTJS"
          : name === "nextjs"
          ? "NEXTJS"
          : name === "tailwindcss"
          ? "TAILWINDCSS"
          : name === "materialUi"
          ? "MATERIALUI"
          : name === "github"
          ? "GIT و GITHUB"
          : "بوت کمپ صفر تا صد فرانت"
      } چیست؟`,
      description: `${
        name === "htmlcss"
          ? "HTML و CSS دو مفهوم مجزا هستند. قدم اول در یادگیری برنامه نویسی، آموزش این دوره است؛ HTML در واقع همان ساختار صفحات مختلف وبسایت یا نرم افزاری است که روی آن کار می کنیم؛ در حالیکه CSS به همین ساختاری که ایجاد کرده ایم رنگ و بو می بخشد."
          : name === "javascript"
          ? "زبان برنامه نویسی جاوااسکریپت، پرطرفدارترین زبان در حوزه وب و اپلیکیشن می باشد. جاوااسکریپت، منطق و فرایند ها را به وبسایت ما اضافه می کند. از این زبان هم در سمت فرانت و هم بک اند استفاده می شود. نکته مهم اینست که برای تبدیل شدن به یک فرد متخصص در برنامه نویسی، یادگیری عمیق JS بسیار حائز اهمیت است. "
          : name === "reactjs"
          ? "در حال حاضر، در کمتر پروژه ای از جاوااسکریپت خام استفاده می شود. زبان JS دارای یکسری کتابخانه ها در سمت فرانت و بک اند است که پروژه های امروزی را به شدت تحت تاثیر قرار داده است. ری اکت از پرکاربردترین این کتابخانه ها در سمت فرانت می باشد. با آموزش صحیح ری اکت شما تقریباً 70 درصد مسیر یک متخصص فرانت را طی کرده اید."
          : name === "nextjs"
          ? "نکست، یک فریم وورک از ری اکت می باشد. با استفاده از ری اکت، متوجه می شویم که یکسری باگ های اساسی وجود دارد؛  مثل عدم توانایی لازم ری اکت در فرایند SEO. نکست جی اس، این سری از مشکلات ری اکت را از بین می برد؛ همچنین، پرفورمنس و سرعت وبسایت را به شدت افزایش می دهد."
          : name === "tailwindcss"
          ? "تیلویند، توسط شخصی به نام آدام واتان ساخته شد. استفاده از این فریم وورک CSS ای، باعث می شود هیچ فایل استایلی به پروژه اضافه نکنیم، حجم کل پروژه بسیار کاهش می یابد و سرعت کدزنی مارو افزایش می دهد."
          : name === "materialUi"
          ? "یادگیری متریال هم در کنار تیلویند به کمک می کند تا با استفاده از یکسری کامپوننت های آماده، سرعت کدزنی، کیفیت آن و همچنین پرفورمنس وبسایت دو چندان شود. تقریباً درصد بسیار زیادی از پروژه ها در سطح دنیا از متریال و تیلویند برای استایل دهی استفاده می کنند."
          : name === "github"
          ? "فرض کنید مدت هاست روی یک پروژه کار می کنید؛ به یکباره سیستم شما دچار اختلال می شود و کل فایل های پروژه از بین می رود، چه احساسی دارید؟ با استفاده از Git و Github این مشکل برطرف می شود و شما در هرکجا امکان دسترسی به سورس کد پروژه تون رو دارید. همچنین، در تیم های برنامه نویسی می بایست برای اینکه با تیم کار کنید حتماً از گیت و گیت هاب استفاده نمایید؛ چون قابلیت های بیشماری دارد."
          : "واژه بوت کمپ در ابتدا در ارتش آمریکا ایجاد شد و معنی آن قرارگیری در یک کمپ آموزشی با مدت معلوم و برنامه های تمرینی و نظارتی از پیش تعیین شده است. چندین سال است که این واژه به حوزه برنامه نویسی وارد شده است. در این بوت کمپ تمام آموزش ها از پایه در تا سطح ورود به بازار کار در اختیار شما قرار می گیرد. در این بوت کمپ ما به مدت 8 ماه در کنار شما هستیم تا بهترین نتایج رو بگیرید، پس از گذراندن این بوت کمپ، که تحت نظارت 24 ساعته تیم کَن آی کُد هستید، آمادگی لازم برای استخدام در شرکت های برنامه نویسی، امکان دریافت پروژه های فریلسنری و حتی امکان استخدام در آکادمی کَن آی کُد را دارید."
      } `,
    },
    {
      id: "why",
      title: `چرا دوره ${
        name === "htmlcss"
          ? "HTML و CSS"
          : name === "javascript"
          ? "JAVASCRIPT"
          : name === "reactjs"
          ? "REACTJS"
          : name === "nextjs"
          ? "NEXTJS"
          : name === "tailwindcss"
          ? "TAILWINDCSS"
          : name === "materialUi"
          ? "MATERIALUI"
          : name === "github"
          ? "GIT و GITHUB"
          : "بوت کمپ صفر تا صد فرانت"
      }؟`,
      description: `${
        name === "htmlcss"
          ? "نقطه شروع مسیر برنامه نویس شدن همه برنامه نویس ها، بوده است. این دوره بهت کمک می کنه تا متوجه بشی که علاقه داری این مسیر رو ادامه بدی یا نه؟"
          : name === "javascript"
          ? "پرطرفدارترین، پر کاربرد ترین و شاید بتونم بگم زیباترین زبان برنامه نویسی در دنیا هستش. وقتی جاوااسکریپت رو یاد گرفتم، تفکر منطقی و تحلیلی به کل تصمیمات زندگیم اضافه شد. "
          : name === "reactjs"
          ? "کدزنی رو برای ما راحت تر می کنه، فهم پروژه رو بسیار آسان تر می کند، سرعت وبسایت و پرفورمنس آن را به شدت بالاتر می بردو در نهایت باید بگم ری اکت هم در بین کتابخانه های فرانتی جاوااسکریپت، پرطرفدارترین و پرکاربرد ترین است. از دیگر کتابخانه های فرانتی جاوااسکریپت که طرفدار زیادی دارند می تونیم به vue.js و svelte هم اشاره کنیم."
          : name === "nextjs"
          ? "آموزش این فریم وورک ری اکتی، عملاً شما را به یک فول استک دولوپر تبدیل می کند. شما می توانید با استفاده از نکست، تمام فرایند های فرانت و بک اند پروژه تون را همزمان هندل کنید. افزایش پرفورمنس، افزایش سرعت کدزنی و کاهش چشمگیر حجم کد ها در کنار امکانات فوق العاده ای که نکست در مورد سئو توسعه دهندگی یک وبسایت به ما ارائه می کند؛ این فریم وورک را تبدیل به یک ابر قهرمان فرانت اند کرده است. هلدینگ های زیادی در دنیا و در داخل کشور از این فریم وورک استفاده می کنند، مثل دیجی کالا."
          : name === "tailwindcss"
          ? "در ابتدای مسیر برنامه نویسی فرانت اند، متوجه خواهید شد که تعداد فایل های CSS یا همون استایل ها خیلی زیاد میشه. با استفاده از کلاس های تیلویند که یکی از قدرتمندترین و پرکاربردترین فریم وورک های استایل دهی در CSS هستش، عملکرد وبسایت ما و همچنین پرفورمنس خود برنامه نویس به شدت افزایش پیدا می کند."
          : name === "materialUi"
          ? "متریال یکسری کامپوننت های آماده دارد، مثل button ها، Link ها، فرم ها، اینپوت ها و خیلی کامپونن های دیگری که در پروژه وقت گیر هستند. با استفاده از این کامپوننت های آماده در بسیاری از مواقع، پروژه ما رنگ و لعاب بهتری هم می گیرد در کنار اینکه به سرعت کدزنی، افزایش بهره وری برنامه نویس کمک شایانی می کند."
          : name === "github"
          ? "تقریباً در هیچ کجا در دنیا، بدون استفاده از گیت و گیت هاب هیچ پروژه ای را استارت نمی زنند. گیتهاب در واقع یک Sourse Code Manager هست که به ما در نگهداری از کدها، نگهداری از ورژن های مختلف پروژه کمک  می کند. همچنین برای رزومه سازی باید از گیتهاب استفاده کرد."
          : "با حضور در این بوت کمپ شما طی 8 ماه برنامه نویسی فرانت اند رو آموزش می بینید. آموزش ها به صورت کامل در اختیار تمام کارآموزان قرار خواهد گرفت. آموزش ها طی یک فرایند مشخص و طی بازه های زمانی به شما داده می شوند. تمام کارآموزان با ما ارتباط تصویری خواهند داشت و تمام مسیر یادگیری شما در این بوت کمپ زیر ذره بین هستش تا بهترین نتیجه رو بگیرید؛ همچنین یکسری وبینارهای هفتگی داریم که لایو کد انجام میدیم و همه کارآموزان حضور دارند؛ در همین بوت کمپ شما حتی می توانید، تیم برنامه نویسی خودتون رو شکل بدید. "
      } `,
    },
    {
      id: "advantages",
      title: "مزیت های شرکت در این بوت کمپ؟",
      description: "شرکت در این بوت کمپ یک سری مزیت برای کارآموزان عزیز دارد.",
      advantages: [
        {
          id: "hiring",
          title: "استخدام: ",
          description:
            "استارتاپ کَن آی کُد روز به روز در حال پیشرفت و گسترش تیم پشتیبانی خودش می باشد، همچنین پروژه هایی که به این استارتاپ معرفی می شود تماماً توسط کارآموزان بوت کمپ انجام می شود؛ که از این طریق هم درآمد دارید و هم رزومه تون پربار تر میشه.  ",
        },
        {
          id: "monitoring",
          title: "نظارت کامل بر روند آموزش شما: ",
          description:
            "با توجه به اینکه مدت زمان بوت کمپ برای هر نفر 8 ماه در نظر گرفته شده است، نظارت و پشتیبانی کامل بر روند آموزش، تمرینات و نمودار پیشرفت شما توسط تیم پشتیبانی کَن آی کُد صورت می گیرد.",
        },
        {
          id: "webinar",
          title: "وبینار های هفتگی آنلاین: ",
          description:
            "هر هفته وبینار ها آنلاین داریم که در این وبینار لایو کد انجام میدیم و برخی از مشکلات عمومی بین کارآموزان رو رفع می کنیم.",
        },
        {
          id: "Education",
          title: "آموزش همراه با برنامه ریزی: ",
          description:
            "از مشکلات عمده ای که افراد در آموزش برنامه نویسی دارند، این هستش که برنامه ریزی درستی برای آموزش و تمرینتشان نمی توانند انجام دهند. ما در این بوت کمپ 8 ماهه، به گونه ای روند آموزشی را ترتیب داده ایم که در کمترین زمان ممکن به بالاترین بازدهی خودتون برسید و عملاً آماده ورود به بازارکار باشید.",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full justify-center items-center shadow-normal rounded-lg py-4 px-6">
      {name === "bootcamp" ? (
        <ul
          id="course-details"
          className="relative w-full flex flex-col justify-center items-center"
        >
          {items.map((item) => (
            <li key={item.id} className="mt-3 w-full">
              {item.id !== "advantages" && (
                <h2 className="font-heavey text-title">
                  <QuestionAnswerTwoToneIcon fontSize="small" sx={{ ml: 1 }} />
                  {item.title}
                </h2>
              )}
              {item.id !== "advantages" && (
                <p className="font-regular text-justify text-detail text-sm mt-2">
                  {!showMore && item.id === "why"
                    ? item.description.substring(0, 150)
                    : item.description}
                </p>
              )}
              {item.id === "advantages" && showMore && (
                <>
                  <h2 className="font-heavey text-title">
                    <QuestionAnswerTwoToneIcon
                      fontSize="small"
                      sx={{ ml: 1 }}
                    />
                    {item.title}
                  </h2>
                  <p className="font-regular text-justify text-detail text-sm mt-2">
                    {item.description}
                  </p>
                  <ul className="w-full flex flex-col justify-center items-center">
                    {item.advantages.map((advantage) => (
                      <li className="my-3 w-full">
                        <h2 className="font-bold text-white bg-gradient-to-r from-indigo700 to-sky600 rounded-sm">
                          <ScatterPlotIcon fontSize="small" sx={{ ml: 1 }} />
                          {advantage.title}
                        </h2>
                        <p className="font-regular text-justify text-detail text-sm mt-2">
                          {advantage.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
          {!showMore && (
            <div className="absolute flex w-full h-[40%] bottom-0 bg-gradient-to-t from-white to-white/30 mx-auto z-[10]"></div>
          )}
          <button
            className={`mt-3 z-[20] ${
              showMore
                ? "ring-1 ring-red600"
                : "ring-1 ring-blue700 bg-gradient-to-l from-blue600 via-blue500 to-blue400"
            } px-4 py-1 text-white rounded-lg
        text-sm`}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <span className="flex text-red600 justify-center items-center">
                <CloseIcon
                  fontSize="small"
                  sx={{ color: "#ef4444", fontWeight: "110", ml: 1 }}
                />
                بستن
              </span>
            ) : (
              "ادامه"
            )}
          </button>
        </ul>
      ) : (
        <ul id="course-details">
          {items.map(
            (item) =>
              item.id !== "advantages" && (
                <li key={item.id} className="mt-3 w-full">
                  <h2 className="font-heavey text-title">
                    <QuestionAnswerTwoToneIcon
                      fontSize="small"
                      sx={{ ml: 1 }}
                    />
                    {item.title}
                  </h2>
                  <p className="font-regular text-justify text-detail text-sm mt-2">
                    {item.description}
                  </p>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default CourseDescription;
