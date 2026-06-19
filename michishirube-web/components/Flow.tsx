'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Flow.module.css';

const STEPS = [
  {
    step: 'STEP 01',
    title: 'ご相談・お問い合わせ',
    body: [
      'まずはお気軽にご相談ください。次のような段階で問題ありません。',
      'ホームページを丸投げしていただければ、人間による確認だけでなくAIによる解析を加えたうえで、Web上で患者さんが迷いやすい点を簡単に整理します。',
    ],
    quotes: ['「今のホームページを見直したい」', '「予約につながりにくい理由を知りたい」', '「何から直せばいいかわからない」'],
  },
  {
    step: 'STEP 02',
    title: '現状確認・簡易診断',
    body: [
      '現在のホームページ、スマホでの見え方、予約ボタンの位置、診療時間、初診案内、Googleマップとのつながりなどを評価したものを出します。',
      '今すぐ直すべき部分と、後から整えればよい部分を分けてご共有します。何から手をつければいいか分からない状態でも、こちらで順番を整理いたします。',
    ],
    quotes: ['「患者さんが予約前で止まりやすい場所」', '「先生の良さが伝わる前に離脱しやすい場所」'],
  },
  {
    step: 'STEP 03',
    title: 'お打ち合わせ',
    body: [
      '簡易診断の内容をもとに、オンライン、お電話、メールでお話を伺います。院の特徴、診療内容、大切にしている考え方、来てほしい患者さん、現在困っていることなどを確認します。',
      'この段階で、必要な作業範囲・費用・スケジュールもできるだけ分かりやすくお伝えします。無理に大きな制作をすすめることはありません。',
    ],
  },
  {
    step: 'STEP 04',
    title: 'ご提案・お見積り',
    body: [
      'お話を伺った内容をもとに、必要な改善内容をご提案します。新しく作り込むべきか、今あるページを整えるだけでよいのかを整理します。',
      '予約導線・初診案内・スマホ表示・Googleマップとの接続など、どこを優先すべきかを明確にし、含まれる作業、含まれない作業、追加費用が発生する可能性がある部分も事前に明記します。',
    ],
  },
  {
    step: 'STEP 05',
    title: 'ご依頼・素材の確認',
    body: [
      '内容にご納得いただけましたら、正式にご依頼となります。ロゴ、院内写真、スタッフ写真、診療メニュー、料金、診療時間、休診日、予約方法など、制作に必要な情報を確認します。',
      '写真が足りない場合も、こちらから必要なカットをご案内します。先生に何度も手間をかけないよう、必要な情報をまとめて整理します。',
    ],
  },
  {
    step: 'STEP 06',
    title: '構成案・原稿作成',
    body: [
      'ヒアリング内容をもとに、サイト全体の構成と原稿を作成します。ただ文章を並べるのではなく、初めて見る患者さんが自然に予約まで進める順番に整えます。',
      '原稿はこちらで作成しますので、先生は内容確認のみで進められます。',
    ],
    quotes: ['「ここなら相談できそう」', '「自分の症状を見てもらえそう」', '「予約まで迷わず進めそう」'],
  },
  {
    step: 'STEP 07',
    title: 'テストサイト制作・確認',
    body: [
      '公開前に、テストサイトとして実際の画面をご確認いただきます。パソコンとスマホの両方で、見え方・文章・予約導線・診療時間・地図情報などを確認します。',
      '修正が必要な箇所は、この段階で整えます。問題がなければ、正式公開へ進みます。',
    ],
  },
  {
    step: 'STEP 08',
    title: '公開・運用開始',
    body: [
      'サイト公開後も、必要に応じてちょっとした修正や更新を行います。診療時間の変更、休診日のお知らせ、料金やメニューの変更など、メールやLINEなどを使い気軽にご連絡いただけるように心がけています。',
    ],
  },
] as const;

export default function Flow() {
  const [index, setIndex] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const [perView, setPerView] = useState(2);
  const firstCardRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const measure = () => {
      const nextPerView = window.innerWidth <= 820 ? 1 : 2;
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

  const maxIndex = Math.max(0, STEPS.length - perView);
  const safeIndex = Math.min(index, maxIndex);

  return (
    <section id="flow" className={styles.section}>
      <div className="wrap">
        <div className={styles.intro}>
          <div>
            <span className={styles.eyebrow}>
              FLOW<span className={styles.jp}>ご相談からサイト公開までの流れ</span>
            </span>
            <div className={styles.display}>
              FLOW
            </div>
          </div>
          <div className={styles.summary}>
            <h2>ご相談からサイト公開までの流れ</h2>
            <p>ととのうWEBでは、サイトを作って終わりでなく、サイトが公開されてからのサポートを大切にしています。</p>
            <p>またご依頼前に、料金体系・作業範囲・追加費用の有無を明確にし、安心して進めていただける形でご案内いたします。</p>
          </div>
        </div>
        <div className={styles.slider}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            aria-label="前のステップへ"
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
              {STEPS.map((item, i) => (
                <article
                  className={styles.card}
                  key={item.step}
                  ref={i === 0 ? firstCardRef : undefined}
                >
                  <span className={styles.step}>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body[0]}</p>
                  {item.quotes ? (
                    <div className={styles.quote}>
                      {item.quotes.map((quote) => (
                        <span key={quote}>{quote}</span>
                      ))}
                    </div>
                  ) : null}
                  {item.body.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="次のステップへ"
            disabled={safeIndex === maxIndex}
            onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
          >
            NEXT
          </button>
          <div className={styles.counter} aria-label="現在のステップ">
            <span className={styles.current}>{String(safeIndex + 1).padStart(2, '0')}</span>
            <span className={styles.total}>/ 08</span>
          </div>
        </div>
      </div>
    </section>
  );
}
