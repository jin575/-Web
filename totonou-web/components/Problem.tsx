import styles from './Problem.module.css';

const CARDS = [
  {
    title: <>サイトが古い・<br />スマホで見づらい</>,
    desc: '何年も前に作ったまま。スマホで見ると文字が小さく、知りたい情報も探しにくい状態になっている。',
  },
  {
    title: <>問い合わせ方法が<br />分かりにくい</>,
    desc: '電話番号や予約フォームが見つけづらく、来店したい人がたどり着く前に離れてしまっている。',
  },
  {
    title: <>強みがうまく<br />伝わっていない</>,
    desc: '選ばれる理由や他店との違いが言葉になっておらず、評価の高さがWeb上で活かせていない。',
  },
];

export default function Problem() {
  return (
    <section id="problem" className={styles.section}>
      <div className="wrap">
        <span className={styles.eyebrow}>
          CHECK<span className={styles.jp}>こんな方へ</span>
        </span>
        <p className={styles.lead}>
          どれか一つでも当てはまるなら、Web上の見せ方を整えるだけで、問い合わせが取りやすくなる余地があります。
        </p>
        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.q}>Q</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
