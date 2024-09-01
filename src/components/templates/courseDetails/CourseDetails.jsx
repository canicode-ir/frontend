import CourseDetailsMain from "../../modules/academy/courseDetails/CourseDetailsMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CourseDetails({ course }) {
  return (
    <div>
      <CourseDetailsMain {...course} />
      <ToastContainer
        style={{
          width: "fit-content",
          margin: "80px 0 0 auto",
          boxShadow: "none",
        }}
        closeButton={false}
        autoClose={5000}
        bodyStyle={{
          width: "fit-content",
          color: "",
          fontFamily: "dana",
        }}
        progressStyle={{
          backgroundColor: "rgba(26, 103, 103, 0.2)",
        }}
      />
    </div>
  );
}

export default CourseDetails;
