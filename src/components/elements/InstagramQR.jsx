import Image from "next/image";
import Link from "next/link";

//Images & Icons
import InstaQr from "../../../public/general/InstaQR.jpg";

function InstagramQR() {
  return (
    <div className="flex w-full mb-20 mt-40 px-4 min-[1000px]:mt-40 lg:p-0">
      <Link
        className="relative group flex flex-col w-full flex h-[100px] bg-gradient-to-t from-indigo500 to-indigo300
        rounded-2xl justify-between items-center md:flex-row md:h-20 md:bg-gradient-to-r md:to-indigo100 shadow-normal hover:shadow-inset
        transition-all duration-500"
        href="https://www.instagram.com/saeidj.dev?igsh=Z2swYXh3azI3bXZs"
        target="_blank"
        passHref
      >
        <Image
          className="absolute bottom-10 w-[140px] aspect-square shadow-normal rounded-2xl md:relative 
          md:bottom-3 md:bottom-0 md:right-10 md:w-40 group-hover:ring-2 ring-indigo200 transition-all duration-500"
          src={InstaQr}
          width={600}
          height={600}
          alt="instagram"
        />
        <p
          className="absolute -bottom-2 font-fat text-white text-left p-4 rounded-lg 
        md:w-full md:relative md:bottom-0 md:text-xl"
        >
          ما رو در اینستاگرام همراهی کنید
        </p>
      </Link>
    </div>
  );
}

export default InstagramQR;
