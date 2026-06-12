'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
];

const COPIES = [
  <>いい先生なのに、<br />Webで<span className={styles.em}>損</span>してませんか。</>,
  <>口コミは満点。<br />なのに、予約は<span className={styles.em}>Webで止まっている</span>。</>,
  <>あなたの良さが、<br />ちゃんと<span className={styles.em}>伝わるWeb</span>へ。</>,
  <><span className={styles.em}>選ばれる理由</span>を、<br />ちゃんと見せる。</>,
];

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
        <span className={styles.eyebrow}>
          WEB集客導線改善 &nbsp;—&nbsp; 地域の整体院・整骨院・医院へ
        </span>

        <div className={styles.copyWrap}>
          {COPIES.map((copy, i) => (
            <p
              key={i}
              className={`${styles.copyItem} ${i === activeIdx ? styles.copyActive : ''}`}
            >
              {copy}
            </p>
          ))}
        </div>

        <div className={styles.btns}>
          <a href="#contact" className={styles.btnPrimary}>
            無料でWeb集客の診断を受ける
          </a>
          <a href="#price" className={styles.btnGhost}>
            料金を見る
          </a>
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
