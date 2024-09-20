//Components
import MembersData from "../../elements/MembersData";

//Images & Icons
import ViewStreamIcon from "@mui/icons-material/ViewStream";

function TeamMembers() {
  return (
    <div className="flex flex-col w-full mt-10 px-4 lg:p-0">
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
            sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
          />
          <h5 className="font-heavey text-title text-md md:text-lg">
            اعضاء استارتاپ کَن آی کُد:{" "}
          </h5>
        </div>
        <p className="w-full text-justify py-2 px-2 font-regular text-detail text-md mt-5 md:text-lg">
          در حال حاضر افراد زیر در آکادمی کَن آی کُد مشغول به فعالیت در بخش های
          مختلف اجرایی هستند.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-full">
        <MembersData />
      </div>
    </div>
  );
}

export default TeamMembers;
