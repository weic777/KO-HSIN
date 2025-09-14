import React from "react";
import Lottie from "lottie-react";
import spaceshipAnimation from "../assets/animations/kRuVRnF3t4.json";

export default function SpaceshipAnimation() {
  return (
  <div style={{
  width: 300,
  position: "absolute",
  top: 300,      // 往下移
  left: 500,      // 往右移
  zIndex: 10
}}>
      <Lottie animationData={spaceshipAnimation} loop={true} />
    </div>
  );
}
