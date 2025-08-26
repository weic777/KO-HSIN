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
import skill from '../assets/skill.svg';
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

function ProfilePage() {
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

  return (
    <div className="App">
      {/* 標題區塊 */}
      <section className="profile-title-section">
        <img src={aboutTitle} alt="個人簡介標題圖" />
        <div className="line-grow" style={{ width: '100%', height: '3px', backgroundColor: 'black', marginTop: '20px' }}></div>
      </section>


      {/* 大頭照 + 聯絡資訊 + 教育背景 */}
      <section className="profile-main-section fade-up-delay">
        <img src={myPhoto} alt="我的大頭照" className="profile-photo" />

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
          {/* 高中 */}
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

          {/* 大學 */}
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
      </section>

      {/* 榮譽 */}
      <section className="certificate-section fade-up">
        <div className="certificate-title">
          <img src={certificateIcon} alt="證書圖標" />
          <span className="zh">榮譽</span>
          <span className="en">CERTIFICATE</span>
        </div>

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
      </section>

      {/* 技能 */}
      <section className="skill-section">
        <div className="skill-title">
          <img src={skill} alt="技能圖標" />
          <span className="zh">技能</span>
          <span className="en">SKILLS</span>
        </div>
        <img src={skillBackground} alt="技能背景圖" className="skill-background" />

        <div className="icon-scroll-wrapper">
          <div className="icon-scroll">
            {skills.map((logo, i) => (
              <img key={i} src={logo} alt="技能圖標" className="skill-icon" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
