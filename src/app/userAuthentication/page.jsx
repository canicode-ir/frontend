import LoginPage from "../../components/templates/login/LoginPage";
import { Suspense } from "react";

function page() {
  return (
    <Suspense>
      <div className="flex h-full w-full mx-auto px-4">
        <LoginPage />
      </div>
    </Suspense>
  );
}

export default page;
