import React from "react";
import Lottie from "lottie-react";
import spaceshipAnimation from "../assets/animations/kRuVRnF3t4.json";

export default function SpaceshipAnimation() {
  return (
    <div className="spaceship-wrapper">
      <Lottie animationData={spaceshipAnimation} loop={true} />
    </div>
  );
}
