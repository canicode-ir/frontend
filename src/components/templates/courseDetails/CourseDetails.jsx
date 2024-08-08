import CourseDetailsMain from "../../modules/academy/courseDetails/CourseDetailsMain";

function CourseDetails({ course }) {
  return (
    <div>
      <CourseDetailsMain {...course} />
    </div>
  );
}

export default CourseDetails;
