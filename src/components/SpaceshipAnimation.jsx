import React from "react";
import Lottie from "lottie-react";
import spaceshipAnimation from "../assets/animations/kRuVRnF3t4.json";

export default function SpaceshipAnimation() {
  return (
    <div style={{
      width: "25vw",         // 螢幕寬度的 15%
      position: "absolute",
      top: "2vh",            // 螢幕高度的 5%
      left: "75%",           // 螢幕寬度的 70%
      zIndex: 10,
      transform: "translate(-50%, 0)" // 水平置中調整
    }}>
      <Lottie animationData={spaceshipAnimation} loop={true} />
    </div>
  );
}
