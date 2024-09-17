import CourseDetailsMain from "../../modules/academy/courseDetails/CourseDetailsMain";
import ToastContainerComponent from "../../elements/ToastContainer";

function CourseDetails({ course, coursesParticipated, allCourses }) {
  return (
    <div>
      <CourseDetailsMain
        allCourses={allCourses}
        {...course}
        coursesParticipated={coursesParticipated}
      />
      <ToastContainerComponent />
    </div>
  );
}

export default CourseDetails;
