//Icons and Images
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

function CoursesDashboard() {
  return (
    <div className="w-full flex flex-col justify-start items-center text-white mt-7">
      <h4 className="font-bold text-gray100 mr-1 ml-auto mt-5">
        <BubbleChartIcon fontSize="small" sx={{ mr: 0.3 }} />
        دوره هایی که شرکت کرده اید:
      </h4>
    </div>
  );
}

export default CoursesDashboard;
