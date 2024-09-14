//Components
import CooperationForm from "./CooperationForm";
import ToastContainerComponent from "../../elements/ToastContainer";

//Images & Icons
import ViewStreamIcon from "@mui/icons-material/ViewStream";

function CooperationMain() {
  return (
    <>
      <div className="flex flex-col justify-between items-center ml-auto px-6 lg:p-0 mt-10">
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
            sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
          />
          <h5 className="font-heavey text-title text-md md:text-lg">
            فرم درخواست همکاری:{" "}
          </h5>
        </div>
        <p className="text-justify py-2 text-detail text-md mt-5 md:text-lg">
          عرض ارادت ✋، آکادمی کَن آی کُد، صرفاً یک مجموعه آموزشی نیست. ما در
          این مجموعه سعی می کنیم تا با آموزش های به روز در حوزه برنامه نویسی وب،
          افرادی ماهر را در این حرفه تربیت کنیم. تمامی پروژه های برون سپاری شده
          به ما، توسط متخصصان ارشد آکادمی انجام می شود. شما دوستان عزیز، از طریق
          فرم زیر می توانید در خصوص پروژه تون، با ما همکاری داشته باشید.
        </p>
      </div>
      <CooperationForm />
      <ToastContainerComponent />
    </>
  );
}

export default CooperationMain;
