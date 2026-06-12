'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Carousel.module.css';

const POINTS = [
  { en: 'POINT 01', title: 'スマホで迷わず見られるか',      desc: '今や問い合わせの7割以上はスマホから。文字サイズ・ボタンの大きさ・読み込み速度を最初に確認します。' },
  { en: 'POINT 02', title: '問い合わせ方法が一目で分かるか', desc: '電話番号・フォームがすぐ見つかるか。「どうすれば連絡できるのか」で離脱しているケースが最も多いです。' },
  { en: 'POINT 03', title: '強みが言葉になっているか',       desc: '「丁寧な施術」では差別化になりません。誰に・何を・どう解決するかが具体的に書かれているかを整理します。' },
  { en: 'POINT 04', title: 'ファーストビューで離脱しないか', desc: '最初の3秒で伝わらないと読まれません。「何屋か・誰のためか・次にすべきこと」が一目で分かる構成にします。' },
  { en: 'POINT 05', title: 'Googleマップと連携しているか',   desc: 'マップの評価は高いのにサイトに誘導できていないのは機会損失。マップ埋め込みと口コミ活用を整えます。' },
  { en: 'POINT 06', title: '信頼感が演出されているか',       desc: '顔写真・実績・受賞歴・口コミ抜粋など「この人に頼んでいいか」を後押しする要素が揃っているか確認します。' },
  { en: 'POINT 07', title: '次の行動を促しているか',         desc: '読み終えた人が「次に何をすればいいか」分かる導線が必要です。CTAボタンや電話リンクの配置を最適化します。' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const trackRef  = useRef<HTMLDivElement>(null);
  const maskRef   = useRef<HTMLDivElement>(null);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  // カード幅 + gap を計算
  const getMetrics = useCallback(() => {
    const track = trackRef.current;
    const mask  = maskRef.current;
    if (!track || !mask) return { cardW: 324, maxIndex: 0 };
    const card = track.querySelector<HTMLElement>(`.${styles.card}`);
    const gap  = parseFloat(getComputedStyle(track).gap) || 24;
    const cardW = card ? card.getBoundingClientRect().width + gap : 324;
    const maskW = mask.getBoundingClientRect().width;
    const perView  = Math.max(1, Math.round((maskW + gap) / cardW));
    const maxIndex = Math.max(0, POINTS.length - perView);
    return { cardW, maxIndex };
  }, []);

  const go = useCallback((i: number) => {
    const { cardW, maxIndex } = getMetrics();
    const next = Math.max(0, Math.min(i, maxIndex));
    setIndex(next);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-next * cardW}px)`;
    }
  }, [getMetrics]);

  // 自動再生
  const startAuto = useCallback(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const { cardW, maxIndex } = getMetrics();
        const next = prev >= maxIndex ? 0 : prev + 1;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${-next * cardW}px)`;
        }
        return next;
      });
    }, 3500);
  }, [getMetrics]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    const handleResize = () => go(index);
    window.addEventListener('resize', handleResize);
    return () => {
      stopAuto();
      window.removeEventListener('resize', handleResize);
    };
  }, [startAuto, stopAuto, go, index]);

  // タッチ・マウスドラッグ
  const dragRef = useRef({ dragging: false, startX: 0, baseX: 0 });

  const onDown = (x: number) => {
    const { cardW } = getMetrics();
    dragRef.current = { dragging: true, startX: x, baseX: -index * cardW };
    if (trackRef.current) trackRef.current.style.transition = 'none';
  };
  const onMove = (x: number) => {
    if (!dragRef.current.dragging || !trackRef.current) return;
    trackRef.current.style.transform = `translateX(${dragRef.current.baseX + (x - dragRef.current.startX)}px)`;
  };
  const onUp = (x: number) => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    if (trackRef.current) trackRef.current.style.transition = '';
    const diff = x - dragRef.current.startX;
    if (diff < -50) go(index + 1);
    else if (diff > 50) go(index - 1);
    else go(index);
  };

  const { maxIndex } = getMetrics();

  return (
    <section id="point" className={styles.section}>
      <div className="wrap">
        <span className={styles.eyebrow}>
          POINT<span className={styles.jp}>集客導線のポイント</span>
        </span>
        <h2 className={styles.title}>
          問い合わせを生む<br />Web導線の7つのポイント
        </h2>
        <p className={styles.lead}>
          Webサイトから問い合わせが来ない理由は、だいたいこの7点に集約されます。矢印・ドット・スワイプでご確認ください。
        </p>

        <div
          className={styles.carousel}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div className={styles.trackMask} ref={maskRef}>
            <div
              className={styles.track}
              ref={trackRef}
              onMouseDown={(e) => { onDown(e.clientX); e.preventDefault(); }}
              onMouseMove={(e) => onMove(e.clientX)}
              onMouseUp={(e) => onUp(e.clientX)}
              onTouchStart={(e) => onDown(e.touches[0].clientX)}
              onTouchMove={(e) => onMove(e.touches[0].clientX)}
              onTouchEnd={(e) => onUp(e.changedTouches[0].clientX)}
            >
              {POINTS.map((p, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.no}>{i + 1}</div>
                  <div className={styles.pt}>{p.en}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.ctrl}>
            <div className={styles.dots}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  aria-label={`${i + 1}番目へ`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <div className={styles.arrows}>
              <button
                className={styles.arrow}
                aria-label="前へ"
                disabled={index === 0}
                onClick={() => go(index - 1)}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className={styles.arrow}
                aria-label="次へ"
                disabled={index === maxIndex}
                onClick={() => go(index + 1)}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
