import CheckOtp from "../../components/templates/checkOtp/CheckOtp";
import { Suspense } from "react";

function page() {
  return (
    <Suspense>
      <div className="flex h-full w-full mx-auto px-4">
        <CheckOtp />
      </div>
    </Suspense>
  );
}

export default page;
