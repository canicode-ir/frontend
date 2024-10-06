"use client";

import { useEffect, useState } from "react";
import { notify } from "../../../utils/Toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

//Components
import Loading from "../../elements/Loading";

//Icons & Images
import rejectedPayment from "../../../../public/cart/rejectedPayment.png";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";

function UnverifiedPayment({
  URLHasSearchParams,
  searchParams,
  data: {
    transactionNumber,
    amount,
    status,
    userProfile: { fullName },
  },
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (URLHasSearchParams === 0) {
      notify("پاسخی از سمت سرور دریافت نشد", "error");
      setTimeout(() => {
        router.replace("/");
      }, 2500);
    } else {
      notify("پرداخت با خطا مواجه شد", "error");
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        transactionNumber &&
        amount &&
        !status && (
          <div className="flex flex-col w-full my-10 justify-center items-center min-[600px]:max-w-[574px]">
            <Image
              className="w-[200px]"
              src={rejectedPayment}
              width={600}
              height={600}
              alt="rejected-payment"
            />
            <p
              className="p-2 text-center text-red500 bg-inherit mt-5 border border-dashed border-red400
              font-bold text-[14px] rounded-xl leading-7 shadow-normal"
            >
              {fullName} عزیز، پرداخت شما با مشکل مواجه شد، مبلغ کسر شده از حساب
              شما؛ پس از 72 ساعت کاری عودت می گردد.
            </p>
            <p
              className="p-2 text-center text-indigo800 bg-indigo50 font-bold text-[14px] rounded-xl leading-7 shadow-normal
            mt-5"
            >
              پیشنهاد می کنیم؛ تا زمان برطرف شدن مشکل، شماره تراکنش زیر را داشته
              باشید. از مشکل ایجاد شده صمیمانه پوزش می خواهیم 💜
            </p>
            <div
              className="flex w-full justify-between items-center shadow-normal 
              rounded-xl py-4 px-2 mt-3 font-demibold text-sm text-indigo800 bg-indigo50"
            >
              <h4 className="w-fit font-demibold">شماره تراکنش:</h4>
              <span className="font-regular">{transactionNumber}</span>
            </div>
            <section className="flex w-full mt-5 justify-between items-center py-2 px-1">
              <button
                className="bg-gradient-to-r from-indigo500 to-indigo700 py-[5px] px-4 cursor-pointer transition-all duration-500
        font-bold text-white rounded-lg ring-2 ring-indigo500 hover:ring-4 hover:ring-indigo50"
                onClick={() => (window.location.href = "/client-dashboard")}
              >
                <AssignmentIndIcon fontSize="small" sx={{ ml: 0.3 }} />
                پنل کاربری
              </button>
              <button
                className="bg-white py-[5px] px-4 font-bold text-indigo700 cursor-pointer transition-all duration-500
        ring-2 ring-indigo500 rounded-lg hover:opacity-50"
                onClick={() => (window.location.href = "/")}
              >
                <HomeIcon fontSize="small" sx={{ ml: 0.3 }} />
                صفحه اصلی
              </button>
            </section>
          </div>
        )
      )}
    </>
  );
}

export default UnverifiedPayment;
