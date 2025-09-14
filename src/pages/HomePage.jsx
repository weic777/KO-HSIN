import React, { useEffect } from "react";
import "../css/HomePage.css";
import SpaceshipAnimation from "../components/SpaceshipAnimation.jsx"; // 路徑依實際情況調整

export default function HomePage() {
  // useEffect(() => {
  //   const catWrapper = document.querySelector(".home-page .cat_wrapper");
  //   const wrapper = document.querySelector(".home-page .wrapper");
  //   const cat = document.querySelector(".home-page .cat");
  //   const head = document.querySelector(".home-page .cat_head");
  //   const legs = document.querySelectorAll(".home-page .leg");
  //   const pos = { x: null, y: null };

  //   const walk = () => {
  //     cat.classList.remove("first_pose");
  //     legs.forEach((leg) => leg.classList.add("walk"));
  //   };

  //   const handleMouseMotion = (e) => {
  //     pos.x = e.clientX;
  //     pos.y = e.clientY;
  //     walk();
  //   };

  //   const handleTouchMotion = (e) => {
  //     if (!e.targetTouches) return;
  //     pos.x = e.targetTouches[0].clientX;
  //     pos.y = e.targetTouches[0].clientY;
  //     walk();
  //   };

  //   const turnRight = () => {
  //     cat.style.left = `${pos.x - 90}px`;
  //     cat.classList.remove("face_left");
  //     cat.classList.add("face_right");
  //   };

  //   const turnLeft = () => {
  //     cat.style.left = `${pos.x + 10}px`;
  //     cat.classList.remove("face_right");
  //     cat.classList.add("face_left");
  //   };

  //   const decideTurnDirection = () => {
  //     cat.getBoundingClientRect().x < pos.x ? turnRight() : turnLeft();
  //   };

  //   const headMotion = () => {
  //     pos.y > wrapper.clientHeight - 100
  //       ? (head.style.top = "-15px")
  //       : (head.style.top = "-30px");
  //   };

  //   const jump = () => {
  //     catWrapper.classList.remove("jump");
  //     if (pos.y < wrapper.clientHeight - 250) {
  //       setTimeout(() => {
  //         catWrapper.classList.add("jump");
  //       }, 100);
  //     }
  //   };

  //   const decideStop = () => {
  //     if (
  //       (cat.classList.contains("face_right") && pos.x - 90 === cat.offsetLeft) ||
  //       (cat.classList.contains("face_left") && pos.x + 10 === cat.offsetLeft)
  //     ) {
  //       legs.forEach((leg) => leg.classList.remove("walk"));
  //     }
  //   };

  //   const interval1 = setInterval(() => {
  //     if (!pos.x || !pos.y) return;
  //     decideTurnDirection();
  //     headMotion();
  //     decideStop();
  //   }, 100);

  //   const interval2 = setInterval(() => {
  //     if (!pos.x || !pos.y) return;
  //     jump();
  //   }, 1000);

  //   document.addEventListener("mousemove", handleMouseMotion);
  //   document.addEventListener("touchmove", handleTouchMotion);

  //   return () => {
  //     clearInterval(interval1);
  //     clearInterval(interval2);
  //     document.removeEventListener("mousemove", handleMouseMotion);
  //     document.removeEventListener("touchmove", handleTouchMotion);
  //   };
  // }, []);

  return (
    <div className="home-page">
      <div className="outer_wrapper">
          <SpaceshipAnimation />
        {/* <div className="wrapper">
          <div className="cat_wrapper">
            <div className="cat first_pose">
              <div className="cat_head">
                <svg viewBox="0 0 76.4 61.2">
                  <polygon
                    className="eyes"
                    points="63.8,54.1 50.7,54.1 50.7,59.6 27.1,59.6 27.1,54.1 12.4,54.1 12.4,31.8 63.8,31.8"
                  />
                  <path d="M15.3,45.9h5.1V35.7h-5.1..." />
                </svg>
              </div>

              <div className="body">
                <svg viewBox="0 0 91.7 40.8">
                  <path d="M91.7,40.8H0V10.2h5.1V5.1h5.1V0h66.2v5.1h10.2v5.1h5.1L91.7,40.8z" />
                </svg>
                <div className="tail">
                  <svg viewBox="0 0 25.5 61.1">
                    <polygon points="10.2,56 10.2,50.9 5.1,50.9 5.1,40.7..." />
                  </svg>
                </div>
              </div>

              <div className="front_legs">
                <div className="leg one">
                  <svg viewBox="0 0 14 30.5">
                    <polygon points="15.3,30.5 5.1,30.5 5.1,25.4..." />
                  </svg>
                </div>
                <div className="leg two">
                  <svg viewBox="0 0 14 30.5">
                    <polygon points="15.3,30.5 5.1,30.5 5.1,25.4..." />
                  </svg>
                </div>
              </div>

              <div className="back_legs">
                <div className="leg three">
                  <svg viewBox="0 0 14 30.5">
                    <polygon points="15.3,30.5 5.1,30.5 5.1,25.4..." />
                  </svg>
                </div>
                <div className="leg four">
                  <svg viewBox="0 0 14 30.5">
                    <polygon points="15.3,30.5 5.1,30.5 5.1,25.4..." />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="ground"></div>
        <div className="sign">
          by masahito / <a href="http://www.ma5a.com/">ma5a.com</a>
        </div> */}
      </div>
    </div>
  );
}
