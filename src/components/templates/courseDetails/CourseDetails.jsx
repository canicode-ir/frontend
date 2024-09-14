import CourseDetailsMain from "../../modules/academy/courseDetails/CourseDetailsMain";
import ToastContainerComponent from "../../elements/ToastContainer";

function CourseDetails({ course, coursesParticipated }) {
  return (
    <div>
      <CourseDetailsMain
        {...course}
        coursesParticipated={coursesParticipated}
      />
      <ToastContainerComponent />
    </div>
  );
}

export default CourseDetails;
