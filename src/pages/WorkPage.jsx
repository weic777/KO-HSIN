import '../index.css';
import React, { useState } from 'react';
import '../css/WorkPage.css';
import workTitle from '../assets/work-title.svg';
import wafa from '../assets/wafa.jpg';
import wafa1 from '../assets/wafa1.png';
import wafa2 from '../assets/wafa2.png';
import wafa3 from '../assets/wafa3.png';
import wafa4 from '../assets/wafa4.png';
import wafa5 from '../assets/wafa5.png';
import wafa6 from '../assets/wafa6.png';
import HTMLFlipBook from 'react-pageflip';
import finger from '../assets/finger-arrow.svg';
import arrowleft from '../assets/arrow-left.svg';
import arrowlefthover from '../assets/arrow-left-hover.svg';
import arrowright from '../assets/arrow-right.svg';
import arrowrighthover from '../assets/arrow-right-hover.svg';
import xyellow from '../assets/x-yellow.svg';
import xblue from '../assets/x-blue.svg';
import goarrow from '../assets/go-arrow.svg';
import TvShow from '../assets/TvShow.svg';
import Tv from '../assets/Tv.svg';
import tvmp4 from '../assets/tvmp4.mp4';
import TvBtLf from '../assets/TvBtLf.svg';
import TvBtRi from '../assets/TvBtRi.svg';
import x from '../assets/x.svg';
import { useNavigate } from 'react-router-dom'; 



// ✅ 平面設計作品資料（增加 tag）
const workCards = [
  { year: '2025', title: '作品標題 1', desc: '這是第 1 組作品的解說文字', img: wafa1, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2025', title: '作品標題 2', desc: '這是第 2 組作品的解說文字', img: wafa1, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2025', title: '作品標題 3', desc: '這是第 3 組作品的解說文字', img: wafa1, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2024', title: '作品標題 4', desc: '這是第 4 組作品的解說文字', img: wafa2, imgWidth: 320, imgHeight: 320, tag: '宣傳文宣' },
  { year: '2024', title: '作品標題 5', desc: '這是第 5 組作品的解說文字', img: wafa3, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2023', title: '作品標題 6', desc: '這是第 6 組作品的解說文字', img: wafa4, imgWidth: 320, imgHeight: 320, tag: '宣傳文宣' },
  { year: '2023', title: '作品標題 7', desc: '這是第 7 組作品的解說文字', img: wafa5, imgWidth: 320, imgHeight: 320, tag: '社群圖文' },
  { year: '2022', title: '作品標題 8', desc: '這是第 8 組作品的解說文字', img: wafa6, imgWidth: 340, imgHeight: 320, tag: '宣傳文宣' },
];

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBook, setActiveBook] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBottomSvg, setShowBottomSvg] = useState(false);
  

const navigate = useNavigate();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowBottomSvg(true);
    }, 10000); // 10秒後顯示
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Graphic', id: 'graphic' },
    { label: 'Motion', id: 'motion' },
    { label: 'UI/UX', id: 'uiux' },
  ];

  const books = [
    { cover: wafa, title: '龍府小鍋', size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } }, pages: [[wafa1, wafa2], [wafa3, wafa4], [wafa5, wafa6], [wafa1, wafa2], [wafa3, wafa4]] },
    { cover: wafa, title: '四川龍府', size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } }, pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa]] },
    { cover: wafa, title: 'Orriginbar-序', size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } }, pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa]] },
    { cover: wafa, title: '瓦法奇朵', size: { cover: { w: 175, h: 371 }, page: { w: 343, h: 486 } }, pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa]] },
  ];

  const cardWidth = 320;
  const gap = 60;
  const visibleCards = 3;
  const singleWidth = cardWidth + gap;

  // ✅ tag 篩選
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


  // ✅ 修正最大 index 計算，避免最後出現空白
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
    if (activeCategory !== 'all') return 'white';
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

  return (
    <div className="App">
      {/* 標題 */}
      <section className="title-section">
        <img src={workTitle} alt="作品標題圖" />
      </section>

      {/* 分類選單 */}
      <section className="category-section" style={{ marginTop: '50px', textAlign: 'center' }}>
        <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-xl">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className={`hover-link ${activeCategory === item.id ? 'active' : ''}`}
              type="button"
            >
              <span className="hover-label">{item.label}<span className="count-text">(66)</span></span>
            </button>
          ))}
        </div>
        <div className="line-grow" style={{ width: '100%', height: '3px', backgroundColor: 'black', marginTop: '20px' }}></div>
      </section>

      {/* 菜單設計 */}
      {activeCategory === 'all' && (
        <section
          className="menu-design-section"
          style={{
            backgroundColor: getSectionBgColor('menu'),
            height: '730px',
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
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '60px',
            }}
          >
            {books.map((book, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div className="book-banner">
                  <span className="circle"></span>
                  <span className="banner-text">{book.title}</span>
                  <span className="circle"></span>
                </div>

                <div className="book-3d-wrapper" onClick={() => openBook(i)}>
                  <div className="book-3d">
                    <div className="book-3d__inner">
                      <img className="book-3d__cover" src={book.cover} alt={book.title} />
                    </div>
                  </div>
                </div>

                {/* 第一個書本顯示手指提示 */}
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

      )}

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
      {activeCategory === 'all' && (
        <section className="graphic-design-section">
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
                className={`tag-btn promo ${selectedTags.includes('宣傳文宣') ? 'active' : ''}`}
                onClick={() => toggleTag('宣傳文宣')}
              >
                宣傳文宣
                {selectedTags.includes('宣傳文宣') && <img src={xyellow} alt="x-yellow" className="tag-icon" />}
              </button>

            </div>
          </div>

          <div className="works-wrapper">
            <div className="works-inner" style={{
  transform: `translateX(-${currentIndex * singleWidth}px)`,
  width: `${loopCards.length * singleWidth}px`,
  transition: 'transform 0.5s ease',
  display: 'flex',
}}>
  {loopCards.map((work, idx) => (
    <div className="work-card-wrapper" key={idx}>
      <div className="work-card">
        <div className="year">{work.year}</div>
        <div className="work-content">
          <div className="work-img" style={{
            backgroundImage: `url(${work.img})`,
            width: work.imgWidth ? `${work.imgWidth}px` : '100%',
            height: work.imgHeight ? `${work.imgHeight}px` : '200px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          <div className="work-title">{work.title}</div>
          <div className="work-desc">{work.desc}</div>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>

          <div className="graphic-nav">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="prev"
            ></button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="next"
            ></button>
          </div>
          <div className="more-link-wrapper">
            <div className="more-link">查看更多</div>
            <div className="more-circle">
              <img src={goarrow} alt="go arrow" className="go-arrow" />
            </div>
          </div>




        </section>
      )}

      {/* UI/UX 設計 */}
      {activeCategory === 'all' && (
        <section className="uiux-design-section">
          {/* 標題 */}
          <div className="uiux-section-title">
            <div className="zh">UI / UX</div>
            <div className="en">UI / UX Design</div>
          </div>

          {/* 查看更多 */}
          <div className="uiux-more-link-wrapper">
            <div className="more-link">查看更多</div>
            <div className="more-circle">
              <img src={goarrow} alt="go arrow" className="go-arrow" />
            </div>
          </div>

          {/* 卡片展示遮罩 */}
          <div className="uiux-overlay">
            {[0, 1, 2, 3].map((gIdx) => (
              <div className={`uiux-card-group group-${gIdx}`} key={gIdx}>
                <div className="card-list">
                  {/* 原始卡片 */}
                  {[1, 2, 3, 4].map((cIdx) => (
                    <div className="uiux-card" key={`orig-${cIdx}`}>
                      <img src={wafa1} alt={`Group ${gIdx} Card ${cIdx}`} />
                    </div>
                  ))}
                  {/* 複製一份卡片，保證無縫 */}
                  {[1, 2, 3, 4].map((cIdx) => (
                    <div className="uiux-card" key={`copy-${cIdx}`}>
                      <img src={wafa1} alt={`Group ${gIdx} Card Copy ${cIdx}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 動畫設計 */}
      {activeCategory === 'all' && (
        <section className="animation-design-section">
          {/* 標題 */}
          <div className="uiux-section-title">
            <div className="zh">動畫設計</div>
            <div className="en">Animation Design</div>
          </div>

          {/* 查看更多 */}
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
              <div className="btn-wrapper left">
                <img src={TvBtLf} alt="TvBtLf" className="tv-bt-left" />
                <span className="hover-circle"></span>
              </div>
              <div className="btn-wrapper right">
                <img src={TvBtRi} alt="TvBtRi" className="tv-bt-right" />
                <span className="hover-circle"></span>
              </div>
            </div>
            <div className="tv-mask-wrapper">
              <svg width="610" height="457" viewBox="0 0 610 457" fill="none">
                <defs>
                  <clipPath id="tvClip">
                    <path
                      d="M2.40201 406.86L2.56272 31.8622C2.56983 15.2936 16.0069 1.86794 32.5755 1.87502L551.666 2.09668C568.235 2.10375 581.661 15.541 581.654 32.1095L581.493 407.109C581.486 423.677 568.049 437.103 551.48 437.096L32.3891 436.873C15.8206 436.866 2.39491 423.429 2.40201 406.86Z" stroke="black" stroke-width="3"
                    />
                  </clipPath>
                </defs>

                <foreignObject width="100%" height="100%" clipPath="url(#tvClip)">
                  <video
                    src={tvmp4}
                    autoPlay
                    muted
                    loop
                    controls
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </foreignObject>

                <path
                  d="M2.40201 406.86L2.56272 31.8622C2.56983 15.2936 16.0069 1.86794 32.5755 1.87502L551.666 2.09668C568.235 2.10375 581.661 15.541 581.654 32.1095L581.493 407.109C581.486 423.677 568.049 437.103 551.48 437.096L32.3891 436.873C15.8206 436.866 2.39491 423.429 2.40201 406.86Z" stroke="black" stroke-width="3"
                  // stroke="black"
                  strokeWidth="3"
                  fill="none"
                />
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
      )}



    </div>
  );
}

export default WorkPage;
