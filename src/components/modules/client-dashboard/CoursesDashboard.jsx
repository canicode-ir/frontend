//Components
import CourseLicenseAccordion from "../../modules/client-dashboard/modules/CoursesDashboardModules/CourseLicenseAccordion";

//Icons and Images
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

function CoursesDashboard({
  userProfile: { course_participate, fullName },
  userProfile,
}) {
  console.log(userProfile);
  return (
    <div className="w-full flex flex-col justify-start items-center text-white mt-7">
      <h4 className="font-bold text-gray100 mr-1 ml-auto mt-5">
        <BubbleChartIcon fontSize="small" sx={{ mr: 0.3 }} />
        دوره هایی که شرکت کرده اید:
      </h4>
      <ul className="flex flex-col w-full mt-2 justify-between items-center">
        {course_participate.map((course) => (
          <CourseLicenseAccordion key={course._id} {...course} />
        ))}
      </ul>
      {!course_participate.length && (
        <div
          className="min-h-96 flex flex-col w-full justify-center items-center 
        rounded-2xl backdrop-filter backdrop-blur-md bg-white/10"
        >
          <h1>{fullName} عزیز، شما در هیچ دوره ای شرکت نکرده اید 🧐</h1>
        </div>
      )}
    </div>
  );
}

export default CoursesDashboard;
