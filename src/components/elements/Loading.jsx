import loadingGif from "../../../public/general/loading.gif";
import Image from "next/image";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-40">
      <Image
        src={loadingGif}
        className="w-[70px]"
        width={600}
        height={600}
        alt="loading"
      />
      <h5
        className="bg-gradient-to-l from-indigo900 to-indigo700 bg-clip-text text-transparent
  font-demibold text-sm mb-auto"
      >
        آکادمی کَن آی کُد
      </h5>
    </div>
  );
}

export default Loading;
