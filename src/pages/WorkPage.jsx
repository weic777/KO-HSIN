import '../index.css';
import LightboxPortal from '../components/LightboxPortal';
import React, { useState, useEffect } from "react";
import '../css/WorkPage.css';
import workTitle from '../assets/work-title.svg';
import HTMLFlipBook from 'react-pageflip';
import finger from '../assets/finger-arrow.svg';
import xyellow from '../assets/x-yellow.svg';
import xblue from '../assets/x-blue.svg';
import goarrow from '../assets/go-arrow.svg';
import star6y from '../assets/star6y.svg';
import Tv from '../assets/Tv.svg';
import TvBtLf from '../assets/TvBtLf.svg';
import TvBtRi from '../assets/TvBtRi.svg';
import x from '../assets/x.svg';
import video1 from '../assets/video1.MP4';
import video2 from '../assets/video2.MP4';
import video3 from '../assets/video3.MP4';
import video4 from '../assets/UCN.MP4';
import oreginbarcover from '../assets/oreginbarcover.PNG';
import oreginbar2 from '../assets/oreginbar2.png';
import oreginbar3 from '../assets/oreginbar3.png';
import oreginbar4 from '../assets/oreginbar4.png';
import oreginbar5 from '../assets/oreginbar5.png';
import oreginbar6 from '../assets/oreginbar6.png';
import oreginbar7 from '../assets/oreginbar7.png';
import oreginbar8 from '../assets/oreginbar8.png';
import oreginbar9 from '../assets/oreginbar9.png';
import oreginbar10 from '../assets/oreginbar10.png';
import oreginbar11 from '../assets/oreginbar11.png';
import oreginbar12 from '../assets/oreginbar12.png';
import oreginbar13 from '../assets/oreginbar13.png';
import oreginbar14 from '../assets/oreginbar14.png';
import oreginbar15 from '../assets/oreginbar15.png';
import oreginbar16 from '../assets/oreginbar16.png';
import oreginbar17 from '../assets/oreginbar17.png';
import oreginbar18 from '../assets/oreginbar18.png';
import oreginbar19 from '../assets/oreginbar19.png';
import oreginbar20 from '../assets/oreginbar20.png';
import oreginbar21 from '../assets/oreginbar21.png';
import oreginbar22 from '../assets/oreginbar22.png';
import oreginbar23 from '../assets/oreginbar23.png';
import oreginbarend from '../assets/oreginbarend.png';
import longfuend from '../assets/longfuend.png';
import longfucover from '../assets/longfucover.png';
import longfu1 from '../assets/longfu _1.png';
import longfu2 from '../assets/longfu _2.png';
import longfu5 from '../assets/longfu _5.png';
import longfu6 from '../assets/longfu _6.png';
import longfu7 from '../assets/longfu _7.png';
import longfu8 from '../assets/longfu _8.png';
import longfu9 from '../assets/longfu _9.png';
import longfu10 from '../assets/longfu _10.png';
import longfu11 from '../assets/longfu _11.png';
import longfu12 from '../assets/longfu _12.png';
import longfu13 from '../assets/longfu _13.png';
import longfu14 from '../assets/longfu _14.png';
import xiaoguocover from '../assets/xiaoguocover.jpg';
import xiaoguo1 from '../assets/xiaoguo _1.jpg';
import xiaoguo2 from '../assets/xiaoguo _2.jpg';
import xiaoguo3 from '../assets/xiaoguo _3.jpg';
import xiaoguo4 from '../assets/xiaoguo _4.jpg';
import xiaoguo5 from '../assets/xiaoguo _5.jpg';
import xiaoguo6 from '../assets/xiaoguo _6.jpg';
import xiaoguo7 from '../assets/xiaoguo _7.jpg';
import xiaoguo8 from '../assets/xiaoguo _8.jpg';
import xiaoguo9 from '../assets/xiaoguo _9.jpg';
import xiaoguo10 from '../assets/xiaoguo _10.jpg';
import xiaoguoend from '../assets/xiaoguoend.png';
import wafacover from '../assets/wafacover.jpg';
import wafa2 from '../assets/wafa_2.jpg';
import wafa3 from '../assets/wafa_3.jpg';
import wafa4 from '../assets/wafa_4.jpg';
import wafa5 from '../assets/wafa_5.jpg';
import wafa6 from '../assets/wafa_6.jpg';
import wafa7 from '../assets/wafa_7.jpg';
import wafa8 from '../assets/wafa_8.jpg';
import wafa10 from '../assets/wafa_10.jpg';
import wafaend from '../assets/wafaend.png';
import social1 from '../assets/social1.jpg';
import social2 from '../assets/social2.jpg';
import social3 from '../assets/social3.jpg';
import social4 from '../assets/social4.jpg';
import social5 from '../assets/social5.jpg';
import social6 from '../assets/social6.jpg';
import social7 from '../assets/social7.jpg';
import social8 from '../assets/social8.jpg';
import social9 from '../assets/social9.jpg';
import social10 from '../assets/social10.jpg';
import social11 from '../assets/social11.jpg';
import social12 from '../assets/social12.jpg';
import social13 from '../assets/social13.jpg';
import social14 from '../assets/social14.jpg';
import social15 from '../assets/social15.jpg';
import social16 from '../assets/social16.jpg';
import social17 from '../assets/social17.jpg';
import social18 from '../assets/social18.jpg';
import social19 from '../assets/social19.jpg';
import social20 from '../assets/social20.jpg';
import social21 from '../assets/social21.jpg';
import social22 from '../assets/social22.jpeg';
import social23 from '../assets/social23.jpeg';
import other1 from '../assets/other1.png';
import other2 from '../assets/other2.png';
import other3 from '../assets/other3.png';
import other4 from '../assets/other4.png';
import other5 from '../assets/other5.png';
import other6 from '../assets/other6.png';
import other7 from '../assets/other7.png';
import other8 from '../assets/other8.jpg';
import other9 from '../assets/other9.png';
import uiux1 from '../assets/uiux1.png';
import uiux2 from '../assets/uiux2.jpg';
import uiux3 from '../assets/uiux3.png';
import uiux4 from '../assets/uiux4.png';
import uiux5 from '../assets/uiux5.png';
import uiux6 from '../assets/uiux6.png';
import uiux7 from '../assets/uiux7.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';
import "swiper/css/pagination";


const groupImages = [
  [
    { src: uiux3, width: '25vw', height: '100vh' },
    { src: uiux1, width: '25vw', height: '150vh' },
    { src: uiux4, width: '25vw', height: '50vh' },
    { src: uiux5, width: '25vw', height: '80vh' },
  ],
  [
    { src: uiux2, width: '15vw', height: '60vh' },
    { src: uiux1, width: '15vw', height: '50vh' },
    { src: uiux5, width: '15vw', height: '60vh' },
    { src: uiux3, width: '15vw', height: '50vh' },
  ],
  [
    { src: uiux1, width: '15vw', height: '50vh' },
    { src: uiux5, width: '15vw', height: '60vh' },
    { src: uiux2, width: '15vw', height: '60vh' },
    { src: uiux3, width: '15vw', height: '60vh' },
  ],
  [
    { src: uiux4, width: '15vw', height: '30vh' },
    { src: uiux6, width: '15vw', height: '60vh' },
    { src: uiux7, width: '15vw', height: '60vh' },
    { src: uiux1, width: '15vw', height: '60vh' },
  ],
];

const workCards = [
  { year: '2024', title: '樂天kobo', desc: '新年活動-社群圖文', img: social1, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '樂天kobo', desc: '裝飾閱讀器-社群圖文', img: social2, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '樂天kobo', desc: '訂閱方案-社群圖文', img: social3, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '樂天kobo', desc: '訂閱方案-社群圖文', img: social4, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '樂天kobo', desc: '國際書展視覺延伸-講者介紹', img: social5, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2023', title: '樂天kobo', desc: '國際書展視覺延伸-活動介紹', img: social6, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2023', title: '樂天kobo', desc: '國際書展視覺延伸-攤位資訊', img: social7, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '樂天kobo', desc: 'IG常見問題-系列懶人包', img: social8, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '樂天kobo', desc: 'IG常見問題-系列懶人包', img: social9, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2025', title: '樂天kobo', desc: 'IG常見問題-系列懶人包', img: social10, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2025', title: '樂天kobo', desc: 'IG套書推薦系列-模板設計', img: social11, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2025', title: '樂天kobo', desc: 'IG套書推薦系列-模板設計', img: social12, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2025', title: '樂天kobo', desc: 'IG套書推薦系列-模板設計', img: social13, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '癌症問康健', desc: '線下論壇-主視覺設計', img: social14, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '癌症問康健', desc: '子宮頸癌分期說明-官網&社群圖文', img: social15, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '癌症問康健', desc: '清冠一號注意事項-官網&社群圖文', img: social16, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2023', title: '癌症問康健', desc: '卵巢癌分期說明-官網&社群圖文', img: social17, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '癌症問康健', desc: '補鐵大全-官網&社群圖文', img: social18, imgWidth: 340, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '癌症問康健', desc: '嘴破吃法-官網&社群圖文', img: social19, imgWidth: 340, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '癌症問康健', desc: '癌症自我檢測-官網&社群圖文', img: social20, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '癌症問康健', desc: '嘴破常備藥品-官網&社群圖文', img: social21, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '樂天kobo', desc: '國際書展-社群宣傳圖文', img: social22, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '樂天kobo', desc: '國際書展-社群宣傳圖文', img: social23, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '凨餐酒 Fong Bar & Kitchen', desc: '電影日主題酒單', img: other1, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2024', title: '梟夜', desc: '兩週年-現場宣傳單', img: other2, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2024', title: 'Tonight Bistro', desc: '兩週年-VIP邀請卡', img: other3, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2024', title: '凨餐酒 Fong Bar & Kitchen', desc: '一頁式菜單', img: other4, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2023', title: '琢白美學牙醫診所', desc: '治療項目介紹', img: other5, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2023', title: '琢白美學牙醫診所', desc: '治療項目介紹', img: other6, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2023', title: '琢白美學牙醫診所', desc: '診所介紹系列', img: other7, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2023', title: '僑梓企業', desc: 'LOGO設計', img: other8, imgWidth: 320, imgHeight: 320, tag: '其他設計' },
  { year: '2023', title: '暢快生活', desc: 'LOGO設計', img: other9, imgWidth: 320, imgHeight: 320, tag: '其他設計' },

];



function WorkPage() {
  <div id="work-top"></div>

  const [visibleGroups, setVisibleGroups] = useState(groupImages.length); // 初始全部顯示

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setVisibleGroups(1); // 500 以下只顯示 1 組
      } else if (width < 820) {
        setVisibleGroups(2); // 820 以下顯示 2 組
      } else {
        setVisibleGroups(4); // 大於 820 顯示 4 組
      }
    };

    handleResize(); // 初始化呼叫一次
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false); // 是否開啟 Lightbox
  const [lightboxIndex, setLightboxIndex] = useState(0);   // 當前 Lightbox 顯示的圖片索引
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBook, setActiveBook] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBottomSvg, setShowBottomSvg] = useState(false);
  const handleScroll = (id) => {
    const map = { all: 'work-top', uiux: 'uiux-section', graphic: 'menu-section', Animation: 'animation-section' };
    const el = document.getElementById(map[id]);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  React.useEffect(() => {
    const setHeaderVar = () => {
      const header = document.querySelector('.site-header');
      const h = header ? header.offsetHeight : 80;
      document.documentElement.style.setProperty('--header-offset', `${h}px`);
    };
    setHeaderVar();
    window.addEventListener('resize', setHeaderVar);
    return () => window.removeEventListener('resize', setHeaderVar);
  }, []);


  const filteredWorkCards = workCards.filter(
    work => selectedTags.length === 0 || selectedTags.includes(work.tag)
  );
  const navigate = useNavigate();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowBottomSvg(true);
    }, 10000); // 10秒後顯示
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { label: '前端開發 & UI/UX', id: 'uiux' },
    { label: '平面設計', id: 'graphic' },
    { label: '動畫設計', id: 'Animation' },
  ];

  const books = [
    { cover: xiaoguocover, title: '龍府小鍋', backColor: '#082456ff', size: { cover: { w: 15, h: 23 }, page: { w: 443, h: 586 } }, pages: [[xiaoguocover, xiaoguo1], [xiaoguo2, xiaoguo3], [xiaoguo4, xiaoguo5], [xiaoguo6, xiaoguo7], [xiaoguo8, xiaoguo9], [xiaoguo10, xiaoguoend]] },
    { cover: longfucover, title: '四川龍府', backColor: '#000000ff', size: { cover: { w: 15, h: 23 }, page: { w: 409, h: 576 } }, pages: [[longfucover, longfu1], [longfu2, longfu5], [longfu6, longfu7], [longfu8, longfu9], [longfu10, longfu11], [longfu12, longfu13], [longfu14, longfuend]] },
    { cover: oreginbarcover, title: 'Orriginbar-序', backColor: '#000631ff', size: { cover: { w: 15, h: 23 }, page: { w: 330, h: 586 } }, pages: [[oreginbarcover, oreginbar2], [oreginbar3, oreginbar4], [oreginbar5, oreginbar6], [oreginbar7, oreginbar8], [oreginbar9, oreginbar10], [oreginbar11, oreginbar12], [oreginbar13, oreginbar14], [oreginbar15, oreginbar16], [oreginbar17, oreginbar18], [oreginbar19, oreginbar20], [oreginbar21, oreginbar22], [oreginbar23, oreginbarend]] },
    { cover: wafacover, title: '瓦法奇朵', backColor: '#075524ff', size: { cover: { w: 12, h: 23 }, page: { w: 285, h: 571 } }, pages: [[wafacover, wafa2], [wafa3, wafa4], [wafa5, wafa6], [wafa7, wafa8], [wafa10, wafaend]] },
  ];
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"; // 禁止滾動
    } else {
      document.body.style.overflow = "auto";   // 恢復滾動
    }
  }, [lightboxOpen]);

  useEffect(() => {
    const handleStarParallax = () => {
      const leftStarImg = document.querySelector('.star-background-decoration.left .star-decoration-img');
      const rightStarImg = document.querySelector('.star-background-decoration.right .star-decoration-img');

      if (!leftStarImg || !rightStarImg) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // 找到 UI/UX 和菜單區塊
      const uiuxSection = document.querySelector('.uiux-design-section');
      const menuSection = document.querySelector('.menu-design-section');

      if (!uiuxSection || !menuSection) return;

      const uiuxBottom = uiuxSection.offsetTop + uiuxSection.offsetHeight;
      const menuTop = menuSection.offsetTop;
      const triggerPoint = uiuxBottom - windowHeight * 0.3;

      // 當用戶滾動到兩個區塊之間時顯示星星
      if (scrollY > triggerPoint - windowHeight && scrollY < menuTop + windowHeight) {
        leftStarImg.classList.add('visible');
        rightStarImg.classList.add('visible');

        // 視差效果 - 左右星星有不同的移動方向
        const parallaxSpeed = 0.3;
        const parallaxOffset = (scrollY - triggerPoint) * parallaxSpeed;
        const rotationAngle = (scrollY - triggerPoint) * 0.1;

        // 左邊星星
        leftStarImg.style.transform = `translateY(${parallaxOffset}px) rotate(${rotationAngle}deg)`;

        // 右邊星星 - 反向旋轉
        rightStarImg.style.transform = `translateY(${parallaxOffset}px) rotate(${-rotationAngle}deg)`;
      } else {
        leftStarImg.classList.remove('visible');
        rightStarImg.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleStarParallax);
    handleStarParallax();

    return () => window.removeEventListener('scroll', handleStarParallax);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // 捲動超過 100px 才顯示
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const cardWidth = 320;
  const gap = 60;
  const visibleCards = 3;
  const singleWidth = cardWidth + gap;

  // tag 篩選
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentIndex(0); // 篩選時回到第一張
  };
  const filteredCards =
    selectedTags.length > 0
      ? workCards.filter((w) => selectedTags.includes(w.tag))
      : workCards;
  const loopCards = [...filteredCards, ...filteredCards];


  const totalWidth = filteredCards.length * singleWidth;
  const viewportWidth = visibleCards * singleWidth;
  const maxIndex = Math.max(0, Math.ceil((totalWidth - viewportWidth) / singleWidth));

  const handleNext = () => {
    setCurrentIndex(prev => {
      const next = prev + 1;
      if (next >= filteredCards.length) {
        // 當滑到複製區塊時，瞬間跳回原始
        setTimeout(() => setCurrentIndex(0), 500); // 0.5s transition
      }
      return next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        // 往前滑到最前時，瞬間跳到最後一組
        setTimeout(() => setCurrentIndex(filteredCards.length - 1), 0);
        return filteredCards.length;
      }
      return prev - 1;
    });
  };


  const getSectionBgColor = (section) => {
    switch (section) {
      case 'menu': return 'rgba(13, 183, 214, 0.5)';
      case 'graphic': return 'white';
      case 'uiux': return '#EFEC64';
      case 'final': return '#E6E6DC';
      default: return 'white';
    }
  };

  const openBook = (index) => setActiveBook(index);
  const closeBook = () => setActiveBook(null);
  // 先加一個影片清單
  const videoList = [
    video1,
    video2,
    video3,
    video4,
  ];
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % videoList.length);
  };

  const handlePrevVideo = () => {
    setVideoIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
  };

  return (

    <div className="App">
      {/* 左右星星背景裝飾 */}
      <div className="star-background-decoration left">
        <img
          src={star6y}
          alt="star decoration left"
          className="star-decoration-img"
        />
      </div>

      <div className="star-background-decoration right">
        <img
          src={star6y}
          alt="star decoration right"
          className="star-decoration-img"
        />
      </div>
      {/* 標題 */}
      <section id='work-top' className="title-section">
        <img src={workTitle} alt="作品標題圖" />
      </section>

      {/* 分類選單 */}
      <section className="category-section" style={{ marginTop: '50px', textAlign: 'center' }}>
        <div className="inline-flex">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover-link"
              type="button"
            >
              <span className="hover-label">{item.label}</span>
            </button>
          ))}

        </div>
        <div className="line-grow" style={{ width: '100%', height: '3px', backgroundColor: 'black', marginTop: '20px' }}></div>
      </section>
      {/* UI/UX 設計 */}
      <section id='uiux-section' className="uiux-design-section">
        {/* 標題 */}
        <div className="uiux-section-title">
          <div className="zh">前端開發 & UI/UX</div>
          <div className="en">Frontend Developer <br /> UI / UX Design</div>
        </div>

        {/* 查看更多點擊後頁面還沒做 */}
        <div className="uiux-more-link-wrapper">
          <div className="more-link">查看更多</div>
          <div className="more-circle">
            <img src={goarrow} alt="go arrow" className="go-arrow" />
          </div>
        </div>

        {/* 卡片展示遮罩 */}
        <div className="uiux-overlay">
          {groupImages.slice(0, visibleGroups).map((group, gIdx) => (
            <div className={`uiux-card-group group-${gIdx}`} key={gIdx}>
              <div className="card-list">
                {group.map(({ src }, cIdx) => (
                  <div className="uiux-card" key={`orig-${cIdx}`}>
                    <img src={src} alt={`Group ${gIdx} Card ${cIdx}`} />
                  </div>
                ))}
                {group.map(({ src }, cIdx) => (
                  <div className="uiux-card" key={`orig-${cIdx}`}>

                    <img src={src} alt={`Group ${gIdx} Card ${cIdx}`} />
                  </div>

                ))}
              </div>

            </div>

          ))}

        </div>


      </section>





      {/* 菜單設計 */}
      <section
        id='menu-section'
        className="menu-design-section"
        style={{
          backgroundColor: getSectionBgColor('menu'),
          height: '700px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div className="section-title">
          <div className="zh">菜單設計</div>
          <div className="en">Menu Design</div>
        </div>

        {/* 所有書本包裹容器 */}
        <div
          className="books-container"
        >
          {books.map((book, i) => (
            <div className="book-item" key={i}>
              <div className="book-banner">
                <span className="circle"></span>
                <span className="banner-text">{book.title}</span>
                <span className="circle"></span>
              </div>

              <div
                className="book-3d-wrapper"
                style={{
                  width: book.size.cover.w + 'vw',
                  height: book.size.cover.h + 'vw',
                  '--back-color': book.backColor
                }}
                onClick={() => openBook(i)}
              >
                <div className="book-3d">
                  <div className="book-3d__inner">
                    <img className="book-3d__cover" src={book.cover} alt={book.title} />
                  </div>
                </div>
              </div>

              {i === 0 && (
                <div className="finger-wrapper">
                  <img src={finger} alt="finger" className="finger-icon" />
                  <div className="finger-text">點擊翻閱</div>
                </div>
              )}
            </div>
          ))}
        </div>

      </section>



      {/* 翻書彈窗 */}
      {activeBook !== null && (
        <div className="book-modal">
          <HTMLFlipBook width={books[activeBook].size.page.w} height={books[activeBook].size.page.h}
            size="fixed" showCover={true} mobileScrollSupport={true} maxShadowOpacity={0.5}>
            {books[activeBook].pages.flatMap((pair, index) => [
              <div key={`left-${index}`} className="flip-page"><img src={pair[0]} alt="" /></div>,
              <div key={`right-${index}`} className="flip-page"><img src={pair[1]} alt="" /></div>,
            ])}
          </HTMLFlipBook>
          <button className="book-modal-close" onClick={closeBook}>×</button>
        </div>
      )}

      {/* 平面設計 */}
      <section id='graphic-section' className="graphic-design-section">
        <div className="section-title">
          <div className="zh">平面設計</div>
          <div className="en">Graphic Design</div>

          <div className="tag-container tag-under-title">
            <button
              className={`tag-btn social ${selectedTags.includes('社群圖文') ? 'active' : ''}`}
              onClick={() => toggleTag('社群圖文')}
            >
              社群圖文
              {selectedTags.includes('社群圖文') && <img src={xblue} alt="x-blue" className="tag-icon" />}
            </button>

            <button
              className={`tag-btn promo ${selectedTags.includes('其他設計') ? 'active' : ''}`}
              onClick={() => toggleTag('其他設計')}
            >
              其他設計
              {selectedTags.includes('其他設計') && <img src={xyellow} alt="x-yellow" className="tag-icon" />}
            </button>
          </div>
        </div>

        <div className="works-wrapper">
          <Swiper
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            loop={true}
            navigation={{
              enabled: window.innerWidth >= 820,
              nextEl: ".next",
              prevEl: ".prev"
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 5,
              enabled: window.innerWidth < 820
            }}
            breakpoints={{
              0: { slidesPerView: 1 },     // <500
              500: { slidesPerView: 2 },   // 500~819
              820: { slidesPerView: 3 }    // >=820
            }}
          >
            {workCards
              .filter(work => selectedTags.length === 0 || selectedTags.includes(work.tag))
              .map((work, idx) => (
                <SwiperSlide key={idx}>
                  <div className="work-card-wrapper">
                    <div className="work-card">
                      <div className="year">{work.year}</div>
                      <div className="work-content">
                        <div
                          className="work-img"
                          style={{
                            width: work.imgWidth ? `${work.imgWidth}px` : "100%",
                            height: work.imgHeight ? `${work.imgHeight}px` : "200px"
                          }}
                          onClick={() => {
                            setLightboxIndex(idx);
                            setLightboxOpen(true);
                          }}
                        >
                          <img src={work.img} alt={work.title} />
                          <div className="overlay">點擊放大</div>
                        </div>
                        <div className="work-title">{work.title}</div>
                        <div className="work-desc">{work.desc}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="graphic-nav">
          <button className="prev"></button>
          <button className="next"></button>
        </div>
        {/* 查看更多點擊後頁面還沒做 */}
        <div className="more-link-wrapper">
          <div className="more-link">查看更多</div>
          <div className="more-circle">
            <img src={goarrow} alt="go arrow" className="go-arrow" />
          </div>
        </div>

        <LightboxPortal
          isOpen={lightboxOpen}
          images={filteredWorkCards.map(work => ({
            img: work.img,
            title: work.title
          }))}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={(newIndex) => setLightboxIndex(newIndex)}
        />




      </section>









      {/* 動畫設計 */}
      <section id='animation-section' className="animation-design-section">
        {/* 標題 */}
        <div className="uiux-section-title">
          <div className="zh">動畫設計</div>
          <div className="en">Animation Design</div>
        </div>

        {/* 查看更多點擊後頁面還沒做 */}
        <div className="uiux-more-link-wrapper">
          <div className="more-link">查看更多</div>
          <div className="more-circle">
            <img src={goarrow} alt="go arrow" className="go-arrow" />
          </div>
        </div>

        {/* TV + 影片遮罩 */}
        <div className="tv-container">
          <img src={Tv} alt="Tv" className="tv-base" />
          <div className="tv-overlay">
            <div className="btn-wrapper left" onClick={handlePrevVideo}>
              <img src={TvBtLf} alt="TvBtLf" className="tv-bt-left" />
              <span className="hover-circle"></span>
            </div>
            <div className="btn-wrapper right" onClick={handleNextVideo}>
              <img src={TvBtRi} alt="TvBtRi" className="tv-bt-right" />
              <span className="hover-circle"></span>
            </div>
          </div>

          <div className="tv-mask-wrapper">
            <svg width="610" height="457" viewBox="0 0 610 457" fill="none">
              <defs>
                <clipPath id="tvClip">
                  <path
                    d="M2.40201 406.86L2.56272 31.8622C2.56983 15.2936 16.0069 1.86794 32.5755 1.87502L551.666 2.09668C568.235 2.10375 581.661 15.541 581.654 32.1095L581.493 407.109C581.486 423.677 568.049 437.103 551.48 437.096L32.3891 436.873C15.8206 436.866 2.39491 423.429 2.40201 406.86Z"
                    stroke="black"
                    strokeWidth="3"
                  />
                </clipPath>
              </defs>
              <path
                className="tv-border"
                d="M2.40201 406.86L2.56272 31.8622C2.56983 15.2936 16.0069 1.86794 32.5755 1.87502L551.666 2.09668C568.235 2.10375 581.661 15.541 581.654 32.1095L581.493 407.109C581.486 423.677 568.049 437.103 551.48 437.096L32.3891 436.873C15.8206 436.866 2.39491 423.429 2.40201 406.86Z"
                fill="none"
              />
              <foreignObject width="100%" height="100%" clipPath="url(#tvClip)">
                <video
                  key={videoIndex} // 🔹 保證切換時重新渲染
                  src={videoList[videoIndex]}
                  autoPlay
                  muted
                  loop={false} // 這裡設 false，播放完才切下一支
                  controls
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    backgroundColor: "black" // 當比例不合時填滿背景
                  }}
                  onEnded={handleNextVideo} // 🔹 播放完自動播下一個
                />
              </foreignObject>
            </svg>
          </div>
        </div>




        {showBottomSvg && (
          <div
            className="contact-svg-wrapper"
            onClick={() => navigate('/contact')} // 點擊整個 wrapper 跳轉
          >
            {/* X 可關閉 */}
            <img
              src={x}
              alt="close"
              className="contact-close"
              onClick={(e) => { e.stopPropagation(); setShowBottomSvg(false); }}
            />

            {/* SVG */}
            <svg
              className="my-svg-fixed fly-in"
              viewBox="0 0 200 200"
              width="100%"
              height="100%"
            >
              <path
                className="ContactLine"
                pathLength="1"
                d="M94 86 
             L79 77.53
             C78.6948 77.3538 78.4415 77.1001 78.2659 76.7945 
             78.0903 76.4889 77.9986 76.1424 78 75.79
             V40
             C78 29.9218 73.9964 20.2563 66.8701 13.1299
             C59.7437 6.00356 50.0782 2 40 2
             C29.9218 2 20.2563 6.00356 13.1299 13.1299
             C6.00356 20.2563 2 29.9218 2 40
             V134
             C2 144.078 6.00356 153.744 13.1299 160.87
             C20.2563 167.996 29.9218 172 40 172
             C50.0782 172 59.7437 167.996 66.8701 160.87
             C73.9964 153.744 78 144.078 78 134
             V95.5"
                strokeLinecap="round"

              />
            </svg>

            {/* 聯絡我文字壓在 SVG 上 */}
            <div className="contact-tag-text">聯絡我</div>
          </div>
        )}





      </section>

      <button
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        ⭡
      </button>


    </div>
  );
}

export default WorkPage;
