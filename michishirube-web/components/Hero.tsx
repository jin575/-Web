'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const BG_IMAGES = [
  '/images/hero-1-consultation.png',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
];

const COPIES = [
  {
    en: 'FIRST. TRUST',
    ja: ['信頼が先にある', '予約は そのあとについてくる'],
    long: false,
    stacked: false,
    singleLine: false,
  },
  {
    en: 'DESIGNED FOR TRUST',
    ja: ['私たちは患者さんの視点でサイトを作ります'],
    long: true,
    stacked: false,
    singleLine: false,
  },
  {
    en: 'YOUR WEB. OUR SUPPORT',
    ja: ['ホームぺージから予約導線まで まとめて一括でおまかせください'],
    long: true,
    singleLine: true,
  },
] as const;

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  // Ken Burns をリスタートするためのキー（インデックスごとに保持）
  const [animKeys, setAnimKeys] = useState<number[]>(BG_IMAGES.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % BG_IMAGES.length;
        // 次スライドの animKey をインクリメント → React が要素を再マウント → アニメーションリスタート
        setAnimKeys((keys) => keys.map((k, i) => (i === next ? k + 1 : k)));
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="top">
      {/* 背景スライド */}
      {BG_IMAGES.map((src, i) => (
        <div
          key={`${i}-${animKeys[i]}`}
          className={`${styles.bgSlide} ${i === activeIdx ? styles.active : ''}`}
          style={{ backgroundImage: `url('${src}')` }}
          aria-hidden="true"
        />
      ))}

      <div className={styles.overlay} aria-hidden="true" />

      {/* 中央コンテンツ */}
      <div className={styles.center}>
        <div className={styles.copyWrap}>
          {COPIES.map((copy, i) => (
            <p
              key={copy.en}
              className={`${styles.copyItem} ${i === activeIdx ? styles.copyActive : ''}`}
            >
              <span className={`${styles.mainEn} ${copy.long ? styles.mainEnLong : ''}`}>
                {copy.en}
              </span>
              <span className={`${styles.mainJa} ${copy.singleLine ? styles.mainJaSingleLine : ''}`}>
                {copy.ja.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </p>
          ))}
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className={styles.scrollCue} aria-hidden="true">
        SCROLL
        <div className={styles.line} />
      </div>
    </section>
  );
}
