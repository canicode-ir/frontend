//Icons & Images
import QrCodeIcon from "@mui/icons-material/QrCode";

function CourseLicenseAccordion({ name, title, level }) {
  return (
    <li
      className={`flex flex-col w-full justify-between bg-gradient-to-l
${
  name === "htmlcss"
    ? "from-red700 via-red500 to-red700"
    : name === "javascript"
      ? "from-yellow700 via-yellow500 to-yellow700"
      : name === "reactjs"
        ? "from-sky700 via-sky500 to-sky700"
        : name === "nextjs"
          ? "from-slate800 via-slate600 to-slate800"
          : name === "materialUi"
            ? "from-blue700 via-blue500 to-blue700"
            : name === "tailwindcss"
              ? "from-emerald800 via-emerald600 to-emerald800"
              : "from-neutral950 via-neutral700 to-neutral950"
}
shadow-inset my-2 items-center p-2 rounded-lg transition-all duration-600 
hover:cursor-pointer hover:bg-gradient-to-b`}
    >
      <div className="flex w-full justify-center items-center min-[370px]:justify-between">
        <h3 className="font-demibold text-[13px] min-[400px]:text-sm">
          <QrCodeIcon fontSize="small" sx={{ mr: 1 }} />
          {title}
        </h3>
        <span
          className="hidden font-light text-[10px] text-white
        min-[370px]:block min-[380px]:text-[12px]"
        >
          {level === "starter"
            ? "مقدماتی"
            : level === "mid-level"
              ? "میدلول"
              : level === "advanced-level"
                ? "سنیور"
                : "بوت کمپ"}
        </span>
      </div>
      <div></div>
    </li>
  );
}

export default CourseLicenseAccordion;
