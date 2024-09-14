import CourseDetailsMain from "../../modules/academy/courseDetails/CourseDetailsMain";
import ToastContainerComponent from "../../elements/ToastContainer";

function CourseDetails({ course }) {
  return (
    <div>
      <CourseDetailsMain {...course} />
      <ToastContainerComponent />
    </div>
  );
}

export default CourseDetails;
