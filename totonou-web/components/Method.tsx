import styles from './Method.module.css';

const CARDS = [
  { en: 'DIAGNOSIS', title: <>まず無料で<br />損している点を診断</>, desc: '既存サイト・Googleマップ・口コミ・問い合わせ導線を確認し、改善できる点を整理してお見せします。' },
  { en: 'FOCUS',     title: <>1ページに<br />必要な要素を凝縮</>,  desc: 'あれもこれも詰め込まず、問い合わせにつながる要素だけを1ページに整理。見る人が迷いません。' },
  { en: 'HONEST',    title: <>料金と範囲を<br />最初に明記</>,      desc: '含むもの・含まないもの・追加料金を先にお伝えします。「あとから費用が…」がない誠実な進め方です。' },
];

export default function Method() {
  return (
    <section id="method" className={styles.section}>
      <div className="wrap">
        <span className={styles.eyebrow}>
          METHOD<span className={styles.jp}>集客導線ラボの特長</span>
        </span>
        <h2 className={styles.title}>「伝わる導線」を地道に整えます。</h2>
        <p className={styles.lead}>
          立ち上げ段階だからこそ、1件ずつ丁寧に。背伸びした成果保証ではなく、確実に改善できるところを整えます。
        </p>
        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.en}>{card.en}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
