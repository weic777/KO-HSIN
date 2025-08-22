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

// ✅ 平面設計作品資料（可自由設定年份、標題、描述、圖片、圖片尺寸）
const workCards = [
  {
    year: '2025',
    title: '作品標題 1',
    desc: '這是第 1 組作品的解說文字',
    img: wafa1,
    imgWidth: 320,
    imgHeight: 320,
  },
  {
    year: '2024',
    title: '作品標題 2',
    desc: '這是第 2 組作品的解說文字',
    img: wafa2,
    imgWidth: 320,
    imgHeight: 320,
  },
  {
    year: '2024',
    title: '作品標題 3',
    desc: '這是第 3 組作品的解說文字',
    img: wafa3,
    imgWidth: 320,
    imgHeight: 320,
  },
  {
    year: '2023',
    title: '作品標題 4',
    desc: '這是第 4 組作品的解說文字',
    img: wafa4,
    imgWidth: 320,
    imgHeight: 320,
  },
  {
    year: '2023',
    title: '作品標題 5',
    desc: '這是第 5 組作品的解說文字',
    img: wafa5,
    imgWidth: 320,
    imgHeight: 320,
  },
  {
    year: '2022',
    title: '作品標題 6',
    desc: '這是第 6 組作品的解說文字',
    img: wafa6,
    imgWidth: 340,
    imgHeight: 320,
  },
];

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBook, setActiveBook] = useState(null);
  const [offset, setOffset] = useState(0);

  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Graphic', id: 'graphic' },
    { label: 'Motion', id: 'motion' },
    { label: 'UI/UX', id: 'uiux' },
  ];

  const books = [
    {
      cover: wafa,
      title: '龍府小鍋',
      size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } },
      pages: [[wafa1, wafa2], [wafa3, wafa4], [wafa5, wafa6], [wafa1, wafa2], [wafa3, wafa4]],
    },
    {
      cover: wafa,
      title: '四川龍府',
      size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } },
      pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa]],
    },
    {
      cover: wafa,
      title: 'Orriginbar-序',
      size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } },
      pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa]],
    },
    {
      cover: wafa,
      title: '瓦法奇朵',
      size: { cover: { w: 175, h: 371 }, page: { w: 343, h: 486 } },
      pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa]],
    },
  ];

  const cardWidth = 320;
  const gap = 60;
  const visibleCards = 3;
  const singleWidth = cardWidth + gap;
  const maxOffset = Math.max(0, (workCards.length - visibleCards) * singleWidth);

  const handleNext = () => setOffset(prev => Math.min(prev + singleWidth, maxOffset));
  const handlePrev = () => setOffset(prev => Math.max(prev - singleWidth, 0));

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
      <section className="title-section" style={{ marginTop: '110px', display: 'flex', justifyContent: 'center' }}>
        <img src={workTitle} alt="作品標題圖" style={{ width: '180px', maxWidth: '100%' }} />
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

      {/* 書本封面區塊 */}
      {activeCategory === 'all' && (
        <section className="menu-design-section" style={{
          backgroundColor: getSectionBgColor('menu'),
          height: '730px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5vh',
          position: 'relative',
          flexWrap: 'wrap',
        }}>
          <div className="section-title">
            <div className="zh">菜單設計</div>
            <div className="en">Menu Design</div>
          </div>

          {books.map((book, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="book-banner">
                <span className="circle"></span>
                <span className="banner-text">{book.title}</span>
                <span className="circle"></span>
              </div>

              <div
                onClick={() => openBook(i)}
                className="book-cover"
                style={{
                  width: `${book.size.cover.w}px`,
                  height: `${book.size.cover.h}px`,
                  backgroundImage: `url(${book.cover})`,
                }}
              ></div>

              <div className="finger-wrapper">
                <img src={finger} alt="finger" className="finger-icon" />
                <div className="finger-text">點擊翻閱</div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* 彈窗翻書 */}
      {activeBook !== null && (
        <div className="book-modal">
          <HTMLFlipBook
            width={books[activeBook].size.page.w}
            height={books[activeBook].size.page.h}
            size="fixed"
            showCover={true}
            mobileScrollSupport={true}
            maxShadowOpacity={0.5}
          >
            {books[activeBook].pages.flatMap((pair, index) => [
              <div
                key={`left-${index}`}
                className="flip-page"
                style={{ width: books[activeBook].size.page.w, height: books[activeBook].size.page.h }}
              >
                <img src={pair[0]} alt={`Book ${activeBook + 1} Page ${index * 2 + 1}`} />
              </div>,
              <div
                key={`right-${index}`}
                className="flip-page"
                style={{ width: books[activeBook].size.page.w, height: books[activeBook].size.page.h }}
              >
                <img src={pair[1]} alt={`Book ${activeBook + 1} Page ${index * 2 + 2}`} />
              </div>,
            ])}
          </HTMLFlipBook>
          <button className="book-modal-close" onClick={closeBook}>×</button>
        </div>
      )}

      {/* 平面設計區塊 */}
      <section className="graphic-design-section">
        <div className="section-title">
          <div className="zh">平面設計</div>
          <div className="en">Graphic Design</div>
        </div>

        <div className="works-wrapper">
          <div className="works-inner" style={{ transform: `translateX(-${offset}px)` }}>
            {workCards.map((work, idx) => (
              <div className="work-card-wrapper" key={idx}>
                <div className="work-card">
                  <div className="year">{work.year}</div>
                  <div className="work-content">
                    <div
                      className="work-img"
                      style={{
                        backgroundImage: `url(${work.img})`,
                        width: work.imgWidth ? `${work.imgWidth}px` : '100%',
                        height: work.imgHeight ? `${work.imgHeight}px` : '200px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    ></div>
                    <div className="work-title">{work.title}</div>
                    <div className="work-desc">{work.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="graphic-nav">
          <button onClick={handlePrev} disabled={offset === 0} className="prev"></button>
          <button onClick={handleNext} disabled={offset === maxOffset} className="next"></button>
        </div>
      </section>

      <section className="uiux-design-section" style={{ backgroundColor: getSectionBgColor('uiux'), height: '720px', width: '100%' }}></section>
      <section className="final-design-section" style={{ backgroundColor: getSectionBgColor('final'), height: '760px', width: '100%' }}></section>
    </div>
  );
}

export default WorkPage;
