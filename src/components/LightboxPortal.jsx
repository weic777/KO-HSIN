import '../css/LightboxPortal.css';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function LightboxPortal({ isOpen, images = [], index: initialIndex = 0, onClose, onIndexChange }) {
  const [index, setIndex] = useState(initialIndex);
  const initializedRef = useRef(false); 
  const closeBtnRef = useRef(null);
  const lastActiveRef = useRef(null);

  // 開啟時只初始化一次 index
  useEffect(() => {
    if (isOpen && !initializedRef.current) {
      setIndex(initialIndex);
      initializedRef.current = true;

      lastActiveRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }

    if (!isOpen) {
      initializedRef.current = false;
      document.body.style.overflow = '';
      lastActiveRef.current?.focus?.();
    }
  }, [isOpen, initialIndex]);

  // 回傳給父層
  useEffect(() => {
    if (typeof onIndexChange === 'function') onIndexChange(index);
  }, [index, onIndexChange]);

  // 鍵盤事件
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose?.();
      else if (e.key === 'ArrowLeft') setIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0));
      else if (e.key === 'ArrowRight') setIndex((i) => (images.length ? (i + 1) % images.length : 0));
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, images.length, onClose]);

  if (!isOpen || images.length === 0) return null;

  const current = images[index];
  const src = current?.img ?? current ?? '';
  const alt = current?.title ?? `image-${index + 1}`;

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button
        className="lightbox-close"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
        ref={closeBtnRef}
      >
        ×
      </button>

      <button
        className="lightbox-prev"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0));
        }}
      >
        ‹
      </button>

      <div className="lightbox-image-wrapper" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
      </div>

      <button
        className="lightbox-next"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (images.length ? (i + 1) % images.length : 0));
        }}
      >
        ›
      </button>
    </div>,
    document.body
  );
}

export default LightboxPortal;
