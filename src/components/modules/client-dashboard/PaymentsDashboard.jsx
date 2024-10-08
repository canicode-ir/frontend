"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

//Components
import FormDialog from "../../elements/FormDialog";
import PaymentCard from "./modules/paymentsDashboardModules/PaymentCard";
import PaymentSearchBox from "../../elements/PaymentSearchBox";

//Icons and Images
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SmsIcon from "@mui/icons-material/Sms";

function PaymentsDashboard({
  userProfile: { payments, fullName },
  userPaymentsData: { notVerifiedPayments, confirmedPayments },
}) {
  const [allPayments, setAllPayments] = useState(true);
  const [verifiedPayments, setVerifiedPayments] = useState(false);

  const handlers = { setAllPayments, setVerifiedPayments };

  return (
    <div className="w-full flex flex-col justify-start items-center text-white mt-7">
      <h4 className="font-bold text-gray100 mr-1 ml-auto mt-5">
        <BubbleChartIcon fontSize="small" sx={{ mr: 0.3 }} />
        لیست پرداختی های شما:
      </h4>
      <PaymentSearchBox {...handlers} />
      {payments.length ? (
        <ul className="flex flex-col w-full justify-between items-center mt-2 py-4">
          {allPayments
            ? payments.map((payment) => (
                <PaymentCard key={payment._id} {...payment} />
              ))
            : verifiedPayments
              ? confirmedPayments.map((payment) => (
                  <PaymentCard key={payment._id} {...payment} />
                ))
              : notVerifiedPayments.map((payment) => (
                  <PaymentCard key={payment._id} {...payment} />
                ))}
        </ul>
      ) : (
        <div
          className="flex w-full rounded-2xl mt-2 py-6 px-2 
        backdrop-filter backdrop-blur-md bg-white/10"
        >
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="font-regular text-[12px] text-center min-[500px]:text-sm">
              {fullName} عزیز، لیست پرداخت های شما خالی می باشد 🧐
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

export default PaymentsDashboard;
