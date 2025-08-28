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
      img: 'https://picsum.photos/720/720?random=12',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      ),
    },
    {
      title: '康健雜誌',
      desc:
        'Master CSS animations from your very first set of @keyframes right through to things no one else ever teaches you.',
      img: 'https://picsum.photos/720/720?random=17',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 3v18" />
          <path d="M3 7.5h4" />
          <path d="M3 12h18" />
          <path d="M3 16.5h4" />
          <path d="M17 3v18" />
          <path d="M17 7.5h4" />
          <path d="M17 16.5h4" />
        </svg>
      ),
    },
    {
      title: '新光三越',
      desc:
        'Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.',
      img: 'https://picsum.photos/720/720?random=19',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
    },
    {
      title: 'HiSKIO',
      desc:
        'Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.',
      img: 'https://picsum.photos/720/720?random=42',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
        </svg>
      ),
    },
    {
      title: '樂天市場',
      desc:
        'Grasp how to tame the pixel playground and when to do so. Whilst building with "Performance Driven Development".',
      img: 'https://picsum.photos/720/720?random=128',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      ),
    },
    {
      title: '甲桂林廣告',
      desc:
        'Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.',
      img: 'https://picsum.photos/720/720?random=56',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
          <path d="m14 7 3 3" />
          <path d="M5 6v4" />
          <path d="M19 14v4" />
          <path d="M10 2v2" />
          <path d="M7 8H3" />
          <path d="M21 16h-4" />
          <path d="M11 3H9" />
        </svg>
      ),
    },
    {
      title: '勞動部',
      desc:
        "It's not all just easings and compositions. Time plays a crucial part in various UI patterns that might not seem obvious at first.",
      img: 'https://picsum.photos/720/720?random=39',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 22h14" />
          <path d="M5 2h14" />
          <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
          <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
        </svg>
      ),
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
                  {item.title}
                </h3>
                <p>{item.desc}</p>
                {item.icon}
                {/* <a href="#"><span>Watch now</span></a> */}
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
