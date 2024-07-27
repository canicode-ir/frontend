import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

const CustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField
        {...field}
        {...props}
        label={label}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        fullWidth
      />
    </div>
  );
};
