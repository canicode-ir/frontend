import Image from "next/image";
import Link from "next/link";

//Images & Icons
import notFound from "../../../public/notFound/notfound.svg";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

function CourseNotFound() {
  return (
    <div className="flex flex-col w-full px-4 justify-center items-center mx-auto">
      <Image
        className="min-[500px]:max-w-[400px] aspect-square"
        src={notFound}
        width={600}
        height={600}
        alt="not-found"
      />
      <p className="font-heavey text-detail text-xl min-[360px]:text-2xl">
        دوره مد نظر شما یافت نشد!
      </p>
      <section className="flex flex-col w-full justify-center items-center mx-auto mt-5 min-[400px]:flex-row">
        <Link
          href={"/academy"}
          className="w-full text-center bg-gradient-to-l from-indigo600 to-indigo800 p-3 rounded-2xl 
            font-demibold text-white duration-500 hover:opacity-70
            min-[400px]:w-fit"
        >
          مشاهده دوره ها <OndemandVideoIcon sx={{ m: "0 5px 0 0" }} />
        </Link>
        <Link
          className="flex justify-center items-center text-sky600 font-bold text-[13px] mt-3
              min-[400px]:mt-0 min-[400px]:mr-4"
          href={"/"}
        >
          بازگشت به صفحه اصلی
          <KeyboardReturnIcon
            fontSize="small"
            sx={{ color: "#0284c7", mr: 0.5 }}
          />
        </Link>
      </section>
    </div>
  );
}

export default CourseNotFound;
