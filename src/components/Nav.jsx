import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import behanceIcon from '../assets/Group_Behance.svg';
import behanceIconHover from '../assets/Group_Behance_hover.svg';
import linkedinIcon from '../assets/Group_linkedin.svg';
import linkedinIconHover from '../assets/Group_linkedin_hover.svg';

function Header() {
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'WORK', to: '/work', tooltip: '作品一覽' },
    { label: 'PROFILE', to: '/profile', tooltip: '個人簡介' },
    { label: 'CONTACT', to: '/contact', tooltip: '聯絡我' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="floating-header" aria-hidden="true">
        <div className="nav-logo">
          <Link to="/home">WEI KO-HSIN</Link>
        </div>

        <nav className="nav-main">
          {menuItems.map((item, idx) => (
            <div className="nav-item" key={item.to}>
<Link
  to={item.to}
  className={location.pathname === item.to ? 'active' : ''}
>
  {item.label}
</Link>
              <div className={`tooltip ${location.pathname === item.to ? 'active' : ''}`}>
                {item.tooltip}
              </div>
            </div>
          ))}
        </nav>

        <div className="social-links">
          <div
            className="social-item"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              href="https://www.linkedin.com/in/ko-hsin-wei-312574241"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={hoveredIcon === 'linkedin' ? linkedinIconHover : linkedinIcon}
                alt="LinkedIn"
                className="icon"
              />
            </a>
            <div className="tooltip">LinkedIn</div>
          </div>

          <div
            className="social-item"
            onMouseEnter={() => setHoveredIcon('behance')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              href="https://www.behance.net/gallery/174963007/2025-"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={hoveredIcon === 'behance' ? behanceIconHover : behanceIcon}
                alt="Behance"
                className="icon"
              />
            </a>
            <div className="tooltip">Behance</div>
          </div>
        </div>
      </div>

      <header className="header sticky-header">
        <div className="title">
          <h1 className="nav-logo">
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              WEI KO-HSIN
            </Link>
          </h1>
        </div>

        <nav className="nav desktop-nav">
          {menuItems.map((item) => (
            <div className="nav-item" key={item.to}>
<Link
  to={item.to}
  className={location.pathname === item.to ? 'active' : ''}
>
  {item.label}
</Link>
              <div className={`tooltip ${location.pathname === item.to ? 'active' : ''}`}>
                {item.tooltip}
              </div>
            </div>
          ))}

          <div
            className="nav-item"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              href="https://www.linkedin.com/in/ko-hsin-wei-312574241"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={hoveredIcon === 'linkedin' ? linkedinIconHover : linkedinIcon}
                alt="LinkedIn"
                className="icon"
              />
            </a>
            <div className="tooltip">LinkedIn</div>
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setHoveredIcon('behance')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              href="https://www.behance.net/gallery/174963007/2025-"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={hoveredIcon === 'behance' ? behanceIconHover : behanceIcon}
                alt="Behance"
                className="icon"
              />
            </a>
            <div className="tooltip">Behance</div>
          </div>
        </nav>

        {/* 漢堡按鈕（手機） */}
        <div
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* 右側滑出選單（手機） */}
        <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-items">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-zh">{item.tooltip}</span>
                <span className="mobile-nav-en">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="mobile-socials">
            <a
              href="https://www.linkedin.com/in/ko-hsin-wei-312574241"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={hoveredIcon === 'linkedin' ? linkedinIconHover : linkedinIcon}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.behance.net/gallery/174963007/2025-"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredIcon('behance')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={hoveredIcon === 'behance' ? behanceIconHover : behanceIcon}
                alt="Behance"
              />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
