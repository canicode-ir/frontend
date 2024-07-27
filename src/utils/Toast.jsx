import { toast } from "react-toastify";

export const notify = (text, type) => {
  if (type === "success") {
    toast.success(text, {
      style: {
        width: "fit-content",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 0 10px auto",
        padding: "6px 0",
        boxShadow: "0px 0px 5px 1px rgba(124,147,162,0.12)",
      },
    });
  } else {
    toast.error(text, {
      style: {
        width: "fit-content",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 0 0 auto",
        padding: "6px 0",
        boxShadow: "0px 0px 5px 1px rgba(124,147,162,0.12)",
      },
    });
  }
};
