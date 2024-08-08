"use client";

import React, { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      loop
      mode="normal"
      src="https://lottie.host/29f36d0c-a851-48fc-a685-124bc82df99f/psPGkxphbw.json"
      style={{ width: "fit-content", height: "150px", margin: "0 auto 0 0" }}
    ></lottie-player>
  );
}
