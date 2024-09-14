import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastContainerComponent() {
  return (
    <ToastContainer
      position="top-center" // Change to `bottom-center` for vertical centering
      style={{
        boxShadow: "none",
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, 0)", // Center, modify for vertical positioning
        zIndex: 9999,
      }}
      closeButton={false}
      autoClose={2000}
      bodyStyle={{
        width: "fit-content",
        fontFamily: "dana",
      }}
      progressStyle={{
        backgroundColor: "rgba(26, 103, 103, 0.2)",
      }}
    />
  );
}

export default ToastContainerComponent;
