import Link from "next/link";
import Image from "next/image";

//Icons & Images
import noItems from "../../../../public/cart/empty-cart.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function EmptyCart() {
  return (
    <div className="flex flex-col w-full px-4 justify-center items-center mx-auto">
      <Image
        className="min-[500px]:max-w-[400px] aspect-square"
        src={noItems}
        width={600}
        height={600}
        alt="not-found"
      />
      <div className="flex flex-col justify-center items-center">
        <p className="font-heavey text-detail text-xl min-[360px]:text-2xl">
          سبد خرید شما خالی است!
        </p>
        <p
          className="text-center font-regular text-gray500 text-sm leading-6 mt-3 min-[390px]:text-md min-[500px]:text-lg
        md:text-xl"
        >
          جهت مشاهده دوره ها، میبایست وارد صفحه دوره های آموزشی شوید.
        </p>
        <div className="flex items-center w-fit mt-5 mx-auto text-sm">
          <Link
            className="font-demibold text-indigo500 ring-1 ring-indigo500 p-2 rounded-md ml-3
            bg-white hover:bg-gradient-to-l from-indigo600 to-indigo400 hover:text-white hover:ring-2 hover:ring-indigo200 transition-all duration-500"
            href="/academy"
          >
            دوره های آموزشی
          </Link>
          <Link
            className="flex justify-center items-center font-demibold text-sky600 p-2"
            href="/"
          >
            صفحه اصلی
            <ChevronLeftIcon sx={{ mr: "1px", color: "#0284c7" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
