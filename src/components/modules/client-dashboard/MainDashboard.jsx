//Icons and Images
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

function MainDashboard({ userProfile }) {
  return (
    <div className="text-white">
      <h4 className="font-bold text-gray100 mr-1 mt-5">
        <BubbleChartIcon fontSize="small" sx={{ mr: 0.3 }} />
        دفتر کار شما:
      </h4>
    </div>
  );
}

export default MainDashboard;
