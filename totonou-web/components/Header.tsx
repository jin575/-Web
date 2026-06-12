'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.nav}`}>
        <a href="#top" className={styles.brand}>
          <svg
            className={styles.mark}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="6" cy="6" r="4" fill="#e8f0f8" stroke="#2f6fb3" strokeWidth="2" />
            <circle cx="26" cy="26" r="4" fill="#0f2a4a" />
            <path
              d="M6 10 L6 20 Q6 26 12 26 L22 26"
              stroke="#2f6fb3"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          集客導線ラボ
        </a>

        <button
          className={styles.menuToggle}
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.navLinks} ${open ? styles.open : ''}`}>
          <a href="#mission" onClick={() => setOpen(false)}>理念</a>
          <a href="#problem" onClick={() => setOpen(false)}>こんな方へ</a>
          <a href="#method" onClick={() => setOpen(false)}>特長</a>
          <a href="#service" onClick={() => setOpen(false)}>サービス</a>
          <a href="#price" onClick={() => setOpen(false)}>料金</a>
          <a href="#contact" className={styles.navCta} onClick={() => setOpen(false)}>
            無料相談
          </a>
        </nav>
      </div>
    </header>
  );
}
