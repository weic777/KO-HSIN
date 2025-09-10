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
import AnimatedButton from '../components/AnimatedButton';
import ResumePDF from '../assets/2025-Resume-KOHSIN.pdf';



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

useEffect(() => {
  const stars = document.querySelectorAll(".honor-card .star-icon");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // 進入視窗就加動畫
        } else {
          entry.target.classList.remove("active"); // 離開視窗就移除動畫
        }
      });
    },
    { threshold: 0.5 } // 滾動到一半觸發
  );

  stars.forEach((star) => observer.observe(star));

  return () => observer.disconnect();
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
      logo: WorkLogo1,
      date: '2021',
          position: '平面設計剪輯',

      jobtype: '短期兼職',
    details: [
      { title: '聯名產品設計', desc: '設計聯名產品封面，確保符合品牌規範並展現合作價值。' },
      { title: '活動影片剪輯', desc: '剪輯「時報廣告金犢獎」與「金像獎」頒獎影片，整合素材並調整節奏以提升觀影體驗。' },
      { title: '現場活動執行', desc: '參與頒獎典禮現場執行，協調流程與支援視覺呈現，確保活動順利進行。' }
    ]
    },
    {
      title: '康健雜誌',
      logo: WorkLogo2,
      date: '2022',
          position: '網頁平面設計',

      jobtype: '短期兼職',
    details: [
      { title: '論壇主視覺設計', desc: '負責「2022 年癌症論壇」主視覺設計，並延伸應用於多元宣傳與社群素材。' },
      { title: '資訊圖卡設計', desc: '設計「癌症問康健」官網及社群知識圖卡，以簡化資訊呈現並提升傳播效率。' },
      { title: '內容規範維護', desc: '管理後台內容格式，確保文字與設計規範一致，維持專業形象。' }
    ]
    },
    {
      title: '新光三越',
      logo: WorkLogo3,
      date: '2023',
          position: '視覺設計',

      jobtype: '短期兼職',
    details: [
      { title: '官網 Banner 設計', desc: '規劃並設計官網 Banner，延伸主視覺風格至多元數位素材。' },
      { title: '互動專案 Wireframe', desc: '製作「情人約會地圖」Wireframe，規劃資訊層級與互動動線，提升使用體驗。' },
      { title: '視覺延伸應用', desc: '依據專案需求進行延伸設計，確保品牌風格一致與應用完整性。' }
    ]
    },
    {
      title: 'HiSKIO',
      logo: WorkLogo4,
      date: '2022',
          position: 'UI/UX 實習',

      jobtype: '短期兼職',
    details: [
      { title: '後台UX流程優化', desc: '參與後台 UX 流程優化、分析用戶行為。' },
      { title: '前台UI介面設計', desc: '設計符合操作邏輯的 UI 介面，確保資訊層級清晰與操作流暢。' },
      { title: '網站內容改版', desc: '參與網站一頁式內容改版設計，提升資訊架構與視覺層次。' }
    ]
    },
    {
      title: '樂天市場',
      logo: WorkLogo5,
      date: '2024',
          position: '視覺設計助理',

      jobtype: '短期兼職',
    details: [
      { title: '活動視覺設計', desc: '制定主視覺並應用於各類線上、線下展覽活動行銷素材。' },
      { title: '社群圖文設計', desc: '設計社群圖文並建立模板，提升設計一致性與團隊協作效率。' },
      { title: '球場LED 看板設計', desc: '確保遠距離可視性與品牌曝光效益。' }
    ]
    },
    {
      title: '甲桂林廣告',
      logo: WorkLogo6,
      date: '2025',
          position: '廣告業務',

      jobtype: '正職',
    details: [
      { title: '銷售簡報與行銷文案', desc: '制參與銷售策略規劃，製作專業簡報、現場導引文案與品牌說明資料，提升溝通與提案效果。' },
      { title: '跨部門專案協作', desc: '與設計、攝影、剪輯等協作單位密切溝通，確保行銷素材符合品牌定位與美感品質。' },
      { title: '市場與競品分析', desc: '定期產出市場趨勢與競品研究報告，提供專案即時調整依據，強化行銷策略競爭力。' }
    ]
    },
    {
      title: '勞動部',
     date: '2025',
         position: '平面設計',

     jobtype: '短期兼職',
    details: [
      { title: '活動視覺設計', desc: '制定主視覺並應用於各類線上、線下展覽活動行銷素材。' },
      { title: '社群圖文設計', desc: '設計社群圖文並建立模板，提升設計一致性與團隊協作效率。' },
      { title: '球場LED 看板設計', desc: '確保遠距離可視性與品牌曝光效益。' }
    ]
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
            <AnimatedButton
  submitText="CV"
  successText="下載完成"
  downloadLink={ResumePDF}
/>

<AnimatedButton
  submitText="履歷"
  successText="下載完成"
  downloadLink={ResumePDF}
/>

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
  <div className="exp-position">{item.position}</div>
  <div className="exp-year">{item.date}</div>
</div>


                <div className="exp-details">
                  <div className="exp-jobtype">{item.jobtype}</div>

                  {item.details.map((d, idx) => (
                    <div key={idx} className="exp-detail-block">
                      <div className="exp-detail-title">{d.title}</div>
                      <div className="exp-detail-desc">{d.desc}</div>
                    </div>
                  ))}
                </div>


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
