import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Rtl from "../../utils/Rtl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DatePicker from "react-multi-date-picker";
import { useForm, Controller } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/teal.css";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { notify } from "../../utils/Toast";

//Icons & Images
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [courseLevel, setCourseLevel] = React.useState("");
  const { control } = useForm();

  const handleChange = (event) => {
    setCourseLevel(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const coursesList = [
    {
      id: "1",
      level: "starter",
      title: "سطح مقدماتی - ",
      subTitles: [
        { id: "htmlcss", title: "HTML و CSS" },
        { id: "js", title: "جاوااسکریپت" },
      ],
    },
    {
      id: "2",
      level: "mid-level",
      title: "سطح متخصص - ",
      subTitles: [
        { id: "reactjs", title: "ریکت" },
        { id: "github", title: "گیت و گیت هاب" },
      ],
    },
    {
      id: "3",
      level: "senior",
      title: "سطح متخصص ارشد - ",
      subTitles: [
        { id: "nextjs", title: "نکست" },
        { id: "tailwindcss", title: "تیلویند" },
        { id: "materialUi", title: "MUI" },
      ],
    },
    {
      id: "4",
      level: "other",
      title: "دوره های تکی",
      subTitles: [],
    },
  ];

  return (
    <React.Fragment>
      <Button
        variant="text"
        onClick={handleClickOpen}
        sx={{
          display: "felx",
          width: "100%",
          mt: 1,
          p: "12px 10px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "16px",
          fontFamily: "dana",
          fontWeight: "120",
          fontSize: "15px",
          bgcolor: "#f3e8ff",
          color: "#4338ca",
          "&:hover": {
            color: "#0284c7",
          },
          "@media (min-width:390px)": {
            width: "fit-content",
            mt: 0,
            mr: 2,
          },
        }}
      >
        مشاوره استارت
        <CastForEducationIcon sx={{ mr: 1, p: 0 }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const username = formJson.username;
            const tel = formJson.tel;
            const followedCourse = formJson.followedCourse;
            console.log(formJson);
            notify("درخواست تایم مشاوره شما، با موفقیت ثبت گردید", "success");
            handleClose();
          },
        }}
      >
        <DialogTitle>فرم مشاوره آموزش</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ text: "center", textAlign: "justify" }}>
            عرض ارادت ✋، دوست عزیزم اگر برای شروع مسیر برنامه نویسی هنوز تصمیم
            نهایی نگرفتی و دوست داری قبل از استارت شرایطت رو بسنجی؛ بهترین کار
            اینه که اطلاعات زیر رو تکمیل کنی تا ما با شما تماس بگیریم.
          </DialogContentText>
          <DialogContentText
            sx={{
              text: "center",
              textAlign: "center",
              color: "#f87171",
              p: 0,
              fontWeight: "110",
              fontSize: "13px",
              mt: 2,
            }}
          >
            <PriorityHighIcon fontSize="small" />
            در نظر داشته باشید، تماس مشاوره ای به مدت 15 دقیقه به صورت تصویری می
            باشد.
          </DialogContentText>
          <Rtl>
            <TextField
              sx={{
                direction: "ltr",
                mt: 2,
              }}
              label={<span>نام و نام خانوادگی</span>}
              autoFocus
              required
              margin="dense"
              id="name"
              name="username"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              sx={{
                direction: "ltr",
              }}
              label={<span>شماره همراه</span>}
              required
              margin="dense"
              id="phone"
              name="tel"
              type="tel"
              fullWidth
              variant="standard"
            />
            <div className="mt-4">
              <FormControl
                required
                sx={{
                  width: "100%",
                  direction: "rtl",
                }}
              >
                <InputLabel
                  sx={{
                    fontFamily: "dana",
                    fontSize: "13px",
                  }}
                  id="demo-simple-select-required-label"
                >
                  متقاضی شرکت در کدام سطح هستید؟
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  name="followedCourse"
                  value={courseLevel}
                  label="متقاضی شرکت در کدام سطح هستید؟ *"
                  onChange={handleChange}
                  dir="rtl"
                  sx={{ display: "flex", fontFamily: "dana", fontSize: "12px" }}
                >
                  {coursesList.map((course) => (
                    <MenuItem
                      key={course.id}
                      value={course.level}
                      sx={{
                        display: "flex",
                        fontFamily: "dana",
                        fontSize: "12px",
                      }}
                    >
                      <div className="flex text-[12px]">
                        <span>{course.title}</span>
                        {course.subTitles.length > 0 && (
                          <div className="flex w-fit">
                            {course.subTitles.map((item, index) => (
                              <span key={item.id}>
                                {item.title}
                                {index !== course.subTitles.length - 1 && "،"}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </MenuItem>
                  ))}
                </Select>
                {courseLevel ? null : (
                  <FormHelperText sx={{ color: "#ef4444" }}>
                    لطفاً یک گزینه را انتخاب کنید
                  </FormHelperText>
                )}
              </FormControl>
              <Controller
                control={control}
                name="date"
                rules={{ required: true }} //optional
                render={({
                  field: { onChange, name, value },
                  fieldState: { invalid, isDirty }, //optional
                  formState: { errors }, //optional, but necessary if you want to show an error message
                }) => (
                  <div className="flex w-full mt-4 justify-between items-center">
                    <span className="text-[12px] font-bold text-detail min-[400px]:text-[14px] min-[500px]:text-[15px]">
                      * تاریخ پیشنهادی شما؟{" "}
                    </span>
                    <DatePicker
                      className="rmdp-mobile teal"
                      plugins={[weekends()]}
                      value={value || ""}
                      onChange={(date) => {
                        onChange(date?.isValid ? date : "");
                      }}
                      render={
                        <InputIcon
                          className="w-[130px] ring-2 ring-cyan700 rounded-[16px] py-1 px-3 transition-all cursor-pointer
                          duration-500 shadow-specific hover:shadow-specificOnFocus hover:ring-1 text-cyan800 text-[14px] min-[400px]:w-[160px]"
                          name="demandedDate"
                          id="selectedDate"
                        />
                      }
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                    />
                    {errors &&
                      errors[name] &&
                      errors[name].type === "required" && (
                        <span>your error message !</span>
                      )}
                  </div>
                )}
              />
            </div>
          </Rtl>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button sx={{ fontFamily: "dana", color: "#0369a1" }} type="submit">
            ارسال درخواست
          </Button>
          <Button
            sx={{ fontFamily: "dana", color: "#6b7280" }}
            variant="text"
            onClick={handleClose}
          >
            انصراف
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
