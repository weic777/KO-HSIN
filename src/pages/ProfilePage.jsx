import '../css/ProfilePage.css';
import '../index.css';
import aboutTitle from '../assets/profile-title.svg';
import myPhoto from '../assets/my.svg';
import cakeIcon from '../assets/cake.svg';
import phoneIcon from '../assets/phone.svg';
import mailIcon from '../assets/mail.svg';
import downloadIcon from '../assets/download.svg';
import schoolLogo from '../assets/FHTA.svg';
import fjuLogo from '../assets/fju.svg';
import certificateIcon from '../assets/certificate.svg';
import starIcon from '../assets/star.svg';
import skillBackground from '../assets/skillbackground.svg';
import aiLogo from '../assets/ai-logo.svg';
import psLogo from '../assets/ps-logo.svg';
import prLogo from '../assets/pr-logo.svg';
import aeLogo from '../assets/ae-logo.svg';
import figmaLogo from '../assets/figma-logo.svg';
import sketchLogo from '../assets/sketch-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import jsLogo from '../assets/js-logo.svg';
import idLogo from '../assets/id-logo.svg';
import WorkLogo1 from '../assets/中國時報.svg';
import WorkLogo2 from '../assets/康健雜誌.svg';
import WorkLogo3 from '../assets/新光三越.svg';
import WorkLogo4 from '../assets/HiSKIO.svg';
import WorkLogo5 from '../assets/樂天市場.svg';
import WorkLogo6 from '../assets/甲桂林廣告.svg';

import { useEffect, useRef, useState } from 'react';


function ProfilePage() {
  const photoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [translateY, setTranslateY] = useState(150);
  const targetYRef = useRef(150);


  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();

      // 當容器還沒到達視窗時，大頭貼往上移動，滾回來就往下
      // 這裡 150 是初始位移，你可以改成自己想要的最大位移
      targetYRef.current = Math.min(Math.max(150 - rect.top + 50, 0), 200);
    };

    const animate = () => {
      // 緩動更新，但可以把比例調大，快一點
      setTranslateY(prev => prev + (targetYRef.current - prev) * 0.3);
      requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    animate();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const honors1 = [
    { title: '輔仁大學 110 學年度', desc: '學期成績第三名', date: '2021.10' },
    { title: '輔仁大學 109 學年度', desc: '作文特優', date: '2021.02' },
    { title: '復興商工元旦展', desc: '美工、廣告設計科媒體傳達設計類佳作', date: '2019.12' },
  ];

  const honors2 = [
    { title: '復興商工 107 學年度', desc: '學期成績第三名', date: '2019.02' },
    { title: '復興商工 師生美展 美工科', desc: '公仔設計類 入圍', date: '2017.06' },
    { title: '彩繪大圓山寫生比賽', desc: '高中組入選', date: '2017.06' },
  ];

  const skills = [
    aiLogo, psLogo, idLogo, prLogo, aeLogo, figmaLogo, sketchLogo, reactLogo,
    htmlLogo, cssLogo, jsLogo, aiLogo, psLogo, idLogo, prLogo, aeLogo, figmaLogo,
    sketchLogo, reactLogo, htmlLogo, cssLogo, jsLogo, aiLogo, psLogo, idLogo, prLogo,
    aeLogo, figmaLogo, sketchLogo, reactLogo, htmlLogo, cssLogo, jsLogo, aiLogo, psLogo,
    idLogo, prLogo, aeLogo, figmaLogo, sketchLogo, reactLogo, htmlLogo, cssLogo, jsLogo
  ];
  const expItems = [
    {
      title: '中國時報',
      desc:
        'Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.',
      logo:  WorkLogo1 ,
      date: '2022',
    },
    {
      title: '康健雜誌',
      desc:
        'Master CSS animations from your very first set of @keyframes right through to things no one else ever teaches you.',
      
      logo: WorkLogo2 ,
      date: '2022',
    },
    {
      title: '新光三越',
      desc:
        'Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.',
      
      logo: WorkLogo3,
      date: '2022',
    },
    {
      title: 'HiSKIO',
      desc:
        'Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.',
      img: 'https://picsum.photos/720/720?random=42',
      
      logo: WorkLogo4 ,
      date: '2022',
    },
    {
      title: '樂天市場',
      desc:
        'Grasp how to tame the pixel playground and when to do so. Whilst building with "Performance Driven Development".',
      img: 'https://picsum.photos/720/720?random=128',
      
      logo: WorkLogo5 ,
      date: '2022',
    },
    {
      title: '甲桂林廣告',
      desc:
        'Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.',
      
      logo:  WorkLogo6 ,
      date: '2022',
    },
    {
      title: '勞動部',
      desc:
        "It's not all just easings and compositions. Time plays a crucial part in various UI patterns that might not seem obvious at first.",
      date: '2022',
    },
  ];
  const [activeExp, setActiveExp] = useState(expItems.length - 1);
  return (
    <div className="App">
      {/* 標題區塊 */}
      <section className="profile-title-section">
        <img src={aboutTitle} alt="個人簡介標題圖" />
        <div className="line-grow"></div>
      </section>

      {/* 大頭照 + 聯絡資訊 + 教育背景 + tag */}
      <section className="profile-main-wrapper" ref={wrapperRef}>
        <section className="profile-main-section fade-up-delay">

          {/* 大頭照 */}
          <div className="profile-photo-wrapper">
            <div className="mask-circle">
              <img
                ref={photoRef}
                src={myPhoto}
                alt="我的大頭照"
                className="profile-photo-scroll"
                style={{ transform: `translateY(${translateY}px)` }}
              />
            </div>
          </div>

          {/* 聯絡資訊 */}
          <div className="profile-contact">
            <div className="profile-name">魏可昕</div>
            <div className="profile-name-en">WEI, KO-HSIN</div>

            <div className="contact-item">
              <img src={cakeIcon} alt="生日" />
              <span>2002.08.26</span>
            </div>

            <div className="contact-item">
              <img src={phoneIcon} alt="電話" />
              <span>+886 918-082-691</span>
            </div>

            <div className="contact-item">
              <img src={mailIcon} alt="信箱" />
              <span>anna0826777@gmail.com</span>
            </div>

            <div className="contact-buttons">
              <button className="download-btn">
                CV <img src={downloadIcon} alt="下載" />
              </button>
              <button className="download-btn">
                履歷 <img src={downloadIcon} alt="下載" />
              </button>
            </div>
          </div>

          {/* 教育背景 */}
          <section className="education-section">
            <div className="education-item">
              <img src={schoolLogo} alt="高中校徽" />
              <div className="education-text">
                <div className="edu-title">
                  <span>復興商工</span> <span className="separator">|</span> <span>美工科</span>
                </div>
                <div className="edu-subtitle">媒體傳達設計組</div>
                <div className="edu-date">2017.09 - 2020.06</div>
              </div>
            </div>

            <div className="education-item">
              <img src={fjuLogo} alt="輔大校徽" />
              <div className="education-text">
                <div className="edu-title">
                  <span>輔仁大學</span> <span className="separator">|</span> <span>廣告組</span>
                </div>
                <div className="edu-subtitle">大眾傳播學系</div>
                <div className="edu-date">2020.09 - 2024.06</div>
              </div>
            </div>
          </section>

          {/* tag */}
          <div className="tag-wrapper">
            {[
              "# 熱於助人",
              "# 細節魔人",
              "# 學無止境",
              "# 熱情滿點",
              "# 效率狂人"
            ].map((tag, idx) => (
              <div key={idx} className="tag-item">
                <div className="tag-bar"></div>
                <span className="tag-text">{tag}</span>
              </div>
            ))}
          </div>

        </section>
      </section>

      {/* 榮譽 */}
      <section className="certificate-wrapper fade-up">
        <div className="section-title">
          <span className="zh">榮譽</span> <br />
          <span className="en">CERTIFICATE</span>
        </div>

        <div className="certificate-section">
          <div className="honors-wrapper">
            {[honors1, honors2].map((honorGroup, idx) => (
              <section key={idx} className="honor-row fade-up">
                {honorGroup.map(({ title, desc, date }, i) => (
                  <div key={i} className="honor-card">
                    <img src={starIcon} alt="star icon" className="star-icon" />
                    <div className="honor-title">{title}</div>
                    <div className="honor-desc">{desc}</div>
                    <div className="honor-date">{date}</div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section className="skill-wrapper">
        <img src={skillBackground} alt="技能背景圖" className="skill-background" />

        <div className="skill-content">
          <div className="skill-section-title">
            <span className="zh">技能</span> <br />
            <span className="en">SKILLS</span>
          </div>

          <div className="icon-scroll-wrapper">
            <div className="icon-scroll">
              {[...skills, ...skills].map((logo, i) => (
                <img key={i} src={logo} alt="技能圖標" className="skill-icon" />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* 經歷 */}
      <section className="experience-wrapper">
        <div className="section-title">
          <span className="zh">經歷</span> <br />
          <span className="en">EXPERIENCE</span>
        </div>

        <ul
          className="exp-list"
        // onMouseLeave={() => setActiveExp(0)} /* 滑出恢復第一張 */
        >
          {expItems.map((item, i) => (
            <li
              key={i}
              data-active={activeExp === i}
              onMouseEnter={() => setActiveExp(i)}
            >
              <article className="exp-article">
  <h3 lang={/^[A-Za-z]+$/.test(item.title) ? "en" : "zh"}>
    {item.logo && <img src={item.logo} alt={`${item.title} logo`} className="exp-logo" />}
    <span className="exp-title-text">{item.title}</span>
  </h3>

  <div className="exp-info">
    <div className="exp-line"></div>
    <div className="exp-position">平面設計</div>
    <div className="exp-year">{item.date}</div>
  </div>

  <p>{item.desc}</p>
  {item.icon}
  <img src={item.img} alt="" />
</article>


            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}

export default ProfilePage;
