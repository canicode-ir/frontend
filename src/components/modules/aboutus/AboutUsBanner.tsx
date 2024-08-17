"use client";

//`${imageUrl}c2a95a7b6814ed1543e2e52806b78512b46e6aba18b8d162d45f4f47ace6b09c.aboutUsMain.jpg`
//Images & Icons
import ViewStreamIcon from "@mui/icons-material/ViewStream";

function AboutUsBanner() {
  const imageUrl = "https://canicode-app.storage.iran.liara.space/";
  return (
    <div className="flex flex-col mt-10 w-full px-4 lg:p-0">
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
              sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
            />
            <h5 className="font-heavey text-title text-md md:text-lg">
              درباره کَن آی کُد:{" "}
            </h5>
          </div>
          <p className='text-justify py-2 font-regular text-detail text-md mt-5 md:text-lg'>
            <b className='text-transparent bg-gradient-to-l from-indigo800 to-indigo600 ml-1
            bg-clip-text font-demibold text-lg'>آکادمی کَن آی کُد</b>
            با هدف ایجاد بستری مطمئن، کارآمد و امن در حوزه آموزش برنامه نویسی وب در سال 1402 تاسیس شد. همچنین، این آکادمی در انجام پروژه های برون سپاری شده نیز فعالیت می کند.

          </p> 
      </div>
      <div className="flex flex-col justify-between items-center w-full mt-10">
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
              sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
            />
            <h5 className="font-heavey text-title text-md md:text-lg">
              هدف کَن آی کُد:{" "}
            </h5>
          </div>
          <p className='text-justify py-2 font-regular text-detail text-md mt-5 md:text-lg'>
            هدف اصلی ما در این آکادمی، ارائه به روز ترین و کاربردی ترین دوره های آموزش برنامه نویسی به صورت آنلاین و کاملاً پروژه محور با توجه به نیاز بازار کار می باشد. 
          </p> 
      </div>
      <div className="flex flex-col justify-between items-center w-full mt-10">
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
              sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
            />
            <h5 className="font-heavey text-title text-md md:text-lg">
              مسوولیت کَن آی کُد: {" "}
            </h5>
          </div>
          <p className='text-justify py-2 font-regular text-detail text-md mt-5 md:text-lg'>
            امّا مسوولیت این آکادمی، در واقع همان ایده ایست که این استارتاپ را بوجود آورده است. با اینکه افراد متخصص هم می توانند از آموزش های سطح ارشد ما استفاده کنند؛ 
            اما هدف اصلی از ایجاد این آکادمی، جوان ها و نوجوانانی هستند که درصد زیادی از جامعه را در بر می گیرند، با توجه به میزان بیکاری در سطح جامعه، مسوولیت خود دانستیم تا استارتاپی را 
            بوجود بیاوریم که افراد بتوانند در این حوزه بسیار پرکاربرد آموزش اصولی و هدفمند دریافت کنند و همچنین از همین سنین درآمد خود را داشته باشند. 
          </p> 
      </div>
      <div className="flex flex-col justify-between items-center w-full mt-10">
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
              sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
            />
            <h5 className="font-heavey text-title text-md md:text-lg">
              چشم انداز کَن آی کُد:{" "}
            </h5>
          </div>
          <p className='text-justify py-2 font-regular text-detail text-md mt-5 md:text-lg'>
            تمام تلاش ما این است تا بتوانیم برای قشر جوان و نوجوان بستر درآمدی را بوجود بیاوریم تا سهم کوچکی از کاهش نرخ بیکاری در آینده کشور عزیزمان ایران داشته باشیم.
            پیش بینی ما برای سال آینده یعنی، سال 1404 اینست که حداقل 100 نفر فرد متخصص ارشد به این حوزه معرفی کنیم.
          </p> 
      </div>
    </div>
  );
}

export default AboutUsBanner;
