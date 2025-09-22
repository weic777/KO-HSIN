import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";
import SpaceshipAnimation from "../components/SpaceshipAnimation.jsx";

import WorkTitle from "../assets/work-title-w.svg";
import ProfileTitle from "../assets/profile-title-w.svg";
import ContactTitle from "../assets/contact-title-w.svg";

import bg1 from "../assets/bg1.svg";
import bg2 from "../assets/bg2.svg";
import bg3 from "../assets/bg3.svg";
import Star6 from "../assets/6star.svg";
import Star12 from "../assets/12star.svg";

import title from "../assets/title.svg";
import rocket from "../assets/rocket.svg";
import people from "../assets/people.png";
import phone from "../assets/phone-HOME.svg";
import peopleO from "../assets/peopleO.png";


export default function HomePage() {


  // 隨機生成圓圈，大小 5~30px
  const circles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,   // 5~30px
    top: Math.random() * 100 + "%", // 0%~100%
    left: Math.random() * 100 + "%",// 0%~100%
    opacity: Math.random() * 0.6 + 0.2 // 0.2~0.8
  }));

  return (
    <div className="home-page">
      <div className="outer_wrapper">
        {/* 6.12星星 */}
 <img src={Star6} alt="6star" className="star-svg star6" />
        <img src={Star12} alt="12star" className="star-svg star12" />
{/* Title SVG */}
        <img src={title} alt="Title" className="top-layer title-svg" />
        {/* 背景 SVG */}
        <img src={bg1} alt="bg1" className="bg-svg bg1" />
        <img src={bg2} alt="bg2" className="bg-svg bg2" />
        <img src={bg3} alt="bg3" className="bg-svg bg3" />

        {/* 隨機生成白色小圓圈 */}
{circles.map(c => {
  // 隨機生成閃爍周期：2~5秒
  const duration = (Math.random() * 3 + 2).toFixed(2) + "s"; 
  // 隨機生成延遲：0~5秒
  const delay = (Math.random() * 5).toFixed(2) + "s"; 

  return (
    <div
      key={c.id}
      className="circle"
      style={{
        width: c.size,
        height: c.size,
        top: c.top,
        left: c.left,
        opacity: c.opacity,
        animationDuration: duration,
        animationDelay: delay
      }}
    ></div>
  );
})}


        {/* 飛船動畫 */}
        <SpaceshipAnimation />
{/* 新增元素區 */}
<div className="home-objects">
  <img src={rocket} alt="Rocket" className="rocket" />
  {/* <img src={people} alt="People" className="people" /> */}
  <img src={peopleO} alt="People Outline" className="people-outline" />
  <img src={phone} alt="Phone" className="phone" />
</div>
        {/* 導頁按鈕 */}
        <div className="home-links">
          <Link to="/work"><img src={WorkTitle} alt="Work" className="home-link-icon work-icon" /></Link>
          <Link to="/profile"><img src={ProfileTitle} alt="Profile" className="home-link-icon profile-icon" /></Link>
          <Link to="/contact"><img src={ContactTitle} alt="Contact" className="home-link-icon contact-icon" /></Link>
        </div>

      </div>
    </div>
  );
}
