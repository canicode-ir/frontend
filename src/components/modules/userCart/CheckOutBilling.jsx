"use client";

//Functions
import { addCommas } from "../../../helpers/functions";

function CheckOutBilling({ orders, totalPrice, token }) {
  return (
    <main
      className="flex flex-col w-full justify-between items-center mt-7 p-4
    rounded-xl shadow-normal"
    >
      <ul className="flex flex-col w-full justify-center items-center">
        {orders.map((order, index) => (
          <>
            <li
              className="flex w-full justify-between items-center text-[12px] py-2"
              key={order._id}
            >
              <span className="font-demibold min-[385px]:text-[13px] min-[500px]:text-lg">
                🔸 {order.course.title}
              </span>
              <span className="font-demibold">
                {addCommas(order.course.priceAfterDiscount)} تومان
              </span>
            </li>
            {index !== orders.length - 1 && (
              <div className="w-[95%] h-[1px] bg-slate200 mx-auto my-2"></div>
            )}
          </>
        ))}
      </ul>
      <section id="btn"></section>
    </main>
  );
}

export default CheckOutBilling;
