"use client";

import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Rtl from "../../../utils/Rtl";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Autocomplete from "@mui/material/Autocomplete";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import CircularProgress from "@mui/material/CircularProgress";
let iranCity = require("iran-city");

//Icons & Images
import BadgeIcon from "@mui/icons-material/Badge";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PinDropIcon from "@mui/icons-material/PinDrop";

//Functions
import { notify } from "../../../utils/Toast";

const validationSchema = yup.object({
  username: yup
    .string("لطفاً نام خود یا شرکت خود را وارد نمایید")
    .required("لطفاً این کادر را تکمیل کنید"),
  phone: yup
    .number("لطفاً شماره تماس خود را وارد نمایید")
    .min(11, "شماره تماس خود را مانند 09121234567 وارد کنید")
    .required("لطفاً این کادر را تکمیل کنید"),
});

export default function CooperationForm() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openCitiesList, setOpenCitiesList] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [selectedProvince, setSelectedProvince] = React.useState({});
  const provinceId = selectedProvince.id;
  let citiesOfProvince = iranCity.citiesOfProvince(provinceId);
  const loading = open && options.length === 0;
  let allProvinces = iranCity.allProvinces();

  function sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }

  const handleChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    formik.setFieldValue("type", checked ? "corporation" : "individual");
  };

  const handleOptionChange = (event, newValue) => {
    if (newValue) {
      const province = options.find((option) => option.name === newValue.name);
      setSelectedProvince(province);
      formik.setFieldValue("province", province.name);
    } else {
      setSelectedProvince({});
    }
  };

  const handleCityChange = (event, newValue) => {
    if (newValue) {
      const city = citiesOfProvince.find(
        (option) => option.name === newValue.name
      );
      formik.setFieldValue("city", city.name);
    }
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    margin: "0 auto 0 0",
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#0ea5e9" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const formik = useFormik({
    initialValues: {
      username: "",
      phone: "",
      description: "",
      type: "individual",
      province: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      notify("به زودی با شما تماس خواهیم گرفت", "success");
      values.username = "";
      values.phone = "";
      values.description = "";
      values.type = "individual";
      values.province = "";
      values.city = "";
    },
  });

  const formFields = [
    {
      id: "username",
      name: "username",
      label: (
        <div className="flex w-fit items-center justify-center">
          {isChecked ? (
            <CorporateFareIcon fontSize="small" sx={{ mr: 1 }} />
          ) : (
            <BadgeIcon fontSize="small" sx={{ mr: 1 }} />
          )}
          <span className="text-[14px] min-[500px]:text-[18px]">
            {isChecked ? "نام بنگاه اقتصادی شما: " : "نام و نام خانوادگی: "}
          </span>
        </div>
      ),
      type: "text",
      value: formik.values.username,
      error: formik.touched.username && Boolean(formik.errors.username),
      helperText: formik.touched.username && formik.errors.username,
    },
    {
      id: "phone",
      name: "phone",
      label: (
        <div className="flex w-fit items-center justify-center">
          <SettingsCellIcon fontSize="small" sx={{ mr: 1 }} />
          <span className="text-[14px] min-[500px]:text-[18px]">
            شماره تماس خود را وارد نمایید:{" "}
          </span>
        </div>
      ),
      type: "tel",
      value: formik.values.phone,
      error: formik.touched.phone && Boolean(formik.errors.phone),
      helperText: formik.touched.phone && formik.errors.phone,
    },
  ];

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...allProvinces]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open && !openCitiesList) {
      setOptions([]);
      citiesOfProvince = [];
    }
  }, [open, openCitiesList]);

  return (
    <div
      className="flex flex-col w-[90%] justify-center items-center
    rounded-lg mx-auto mt-7 p-[3px] shadow-normal lg:w-full"
    >
      <Rtl>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full bg-white rounded-md p-4 justify-between"
        >
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col w-fit justify-center items-center min-[398px]:flex-row">
              <h4 className="text-[14px] font-extrabold min-[423px]:text-[16px] md:text-[20px]">
                شخص حقیقی یا حقوقی؟
              </h4>
              <span
                className={`font-demibold text-[11px] ml-auto min-[398px]:mr-2 p-1 rounded-md ${
                  isChecked
                    ? "bg-emerald100 text-green950"
                    : "bg-sky100 text-sky950"
                } md:text-[16px]`}
              >
                {isChecked ? "شخص حقوقی هستم" : "شخص حقیقی هستم"}
              </span>
            </div>
            <FormControlLabel
              control={
                <IOSSwitch
                  id="type"
                  name="type"
                  checked={isChecked}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ p: 0 }}
                />
              }
            />
          </div>
          {formFields.map((field) => (
            <TextField
              sx={{
                mt: "20px",
              }}
              size="small"
              key={field.id}
              id={field.id}
              name={field.name}
              label={field.label}
              type={field.type}
              value={field.value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={field.error}
              helperText={field.helperText}
              variant="standard"
            />
          ))}
          <div
            className="w-full flex flex-col justify-between items-center mt-10 mb-5 
          min-[600px]:flex-row min-[600px]:w-fit"
          >
            <Autocomplete
              id="province"
              name="province"
              size="small"
              sx={{
                width: "100%",
                "@media (min-width: 600px)": { width: 250, mr: 2 },
              }}
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              getOptionLabel={(option) => option.name}
              options={options}
              loading={loading}
              onChange={handleOptionChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    <span className="flex justify-center items-center">
                      <EditLocationAltIcon fontSize="small" sx={{ mr: 1 }} />
                      استان خود را انتخاب کنید:
                    </span>
                  }
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
              renderOption={(props, option) => (
                <li
                  key={option.id}
                  {...props}
                  className="flex flex-col w-[95%] justify-center items-center mx-auto 
                cursor-pointer text-detail text-sm font-demibold odd:bg-purple50 even:bg-purple100 rounded-sm mt-2 p-1"
                >
                  <span className="flex w-full">{option.name}</span>
                </li>
              )}
            />
            <Autocomplete
              id="citiesOfProvince"
              name="citiesOfProvince"
              size="small"
              sx={{
                width: "100%",
                mt: 2,
                "@media (min-width: 600px)": { mt: 0, width: 250, mr: 2 },
              }}
              open={openCitiesList}
              onOpen={() => setOpenCitiesList(true)}
              onClose={() => setOpenCitiesList(false)}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              getOptionLabel={(option) => option.name}
              options={citiesOfProvince}
              loading={loading}
              onChange={handleCityChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    <span className="flex justify-center items-center">
                      <PinDropIcon fontSize="small" sx={{ mr: 1 }} />
                      شهر خود را انتخاب کنید:
                    </span>
                  }
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
              renderOption={(props, option) => (
                <li
                  key={option.id}
                  {...props}
                  className="flex flex-col w-[95%] justify-center items-center mx-auto 
                cursor-pointer text-detail text-sm font-demibold odd:bg-purple50 even:bg-purple100 rounded-sm mt-2 p-1"
                >
                  <span className="flex w-full">{option.name}</span>
                </li>
              )}
            />
          </div>
          <TextareaAutosize
            id="description"
            name="description"
            className="w-full flex min-h-20 shadow-inset my-5 py-1 px-2 rounded-t-md rounded-br-md 
            font-regular text-[12px] min-[420px]:text-[15px] focus:outline-none focus:ring-1 ring-violet100"
            value={formik.values.description}
            onChange={(e) =>
              formik.setFieldValue("description", e.target.value)
            }
            onBlur={formik.handleBlur}
            aria-label="empty textarea"
            placeholder="حداقل یک پاراگراف در مورد پروژه برامون بنویسید: "
          ></TextareaAutosize>
          <Button
            sx={{
              fontFamily: "dana",
              transition: "all 0.3s ease",
              background: `${
                isChecked
                  ? "linear-gradient(to right bottom, #0e7490, #0d9488)"
                  : "linear-gradient(to right bottom, #6366f1, #0369a1)"
              }`,
              "&:hover": { opacity: "85%" },
            }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            ارسال فرم درخواست همکاری
          </Button>
        </form>
      </Rtl>
    </div>
  );
}
