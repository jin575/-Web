'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

const METHODS = [
  {
    number: '01',
    label: 'LOCAL TRUST',
    title: '地域で選ばれてきた理由を、Webでも伝わる形へ',
    body: '口コミや紹介で信頼されている院ほど、その良さがWeb上で伝わりきっていないことがあります。大きく見せるのではなく、初めての患者さんが不安なく問い合わせできる見せ方とその導線を整えます。',
  },
  {
    number: '02',
    label: 'RIGHT ORDER',
    title: '大げさなことはしません。伝えたいことを、伝わる順番に',
    body: '先生が伝えたいことを、そのまま並べるだけでは、初めての患者さんには届きにくいことがあります。症状、費用感、初診の流れ、予約方法など、不安がひとつずつ解けていく順番に整理し整えます。',
  },
  {
    number: '03',
    label: 'BEFORE VISIT',
    title: '来院前の不安を、言葉でほどく',
    body: '患者さんは、予約ボタンが見つからない、診療時間が分かりにくい、問い合わせの前で止まってしまうことがあります。スマホで見たときの予約のしやすさを非常に重視しています。',
  },
  {
    number: '04',
    label: 'UPDATE SUPPORT',
    title: '丸投げしてください、徹底的な更新サポート',
    body: '休診日、診療時間、料金、メニュー、お知らせなど細かな修正に時間を取られたりしないよう、必要な確認だけを行いながら、変更を丸投げできます。作って終わりではなく、無理なく続く形を整えます。',
  },
] as const;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const [perView, setPerView] = useState(3);
  const firstCardRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const measure = () => {
      const nextPerView = window.innerWidth <= 820 ? 1 : 3;
      setPerView(nextPerView);
      if (!firstCardRef.current || !trackRef.current) return;
      const styles = window.getComputedStyle(trackRef.current);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
      setStepWidth(firstCardRef.current.getBoundingClientRect().width + gap);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const maxIndex = Math.max(0, METHODS.length - perView);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 5200);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="message" className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <span className={styles.eyebrow}>
              METHOD<span className={styles.jp}>私たちの整え方</span>
            </span>
            <div className={styles.title}>
              <strong>4</strong>METHOD
            </div>
          </div>
        </div>
        <div className={styles.slider}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            aria-label="前のメソッドへ"
            disabled={safeIndex === 0}
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
          >
            PREV
          </button>
          <div className={styles.viewport}>
            <div
              ref={trackRef}
              className={styles.track}
              style={{ transform: `translateX(${-safeIndex * stepWidth}px)` }}
            >
              {METHODS.map((method, i) => (
                <article
                  className={styles.card}
                  key={method.number}
                  ref={i === 0 ? firstCardRef : undefined}
                >
                  <div className={styles.num}>{method.number}</div>
                  <div className={styles.en}>{method.label}</div>
                  <h3>{method.title}</h3>
                  <p>{method.body}</p>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="次のメソッドへ"
            disabled={safeIndex === maxIndex}
            onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
          >
            NEXT
          </button>
          <div className={styles.counter} aria-label="現在のメソッド">
            <span className={styles.current}>{String(safeIndex + 1).padStart(2, '0')}</span>
            <span className={styles.total}>/ 04</span>
          </div>
        </div>
      </div>
    </section>
  );
}
