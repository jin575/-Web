import styles from './Service.module.css';

export default function Service() {
  return (
    <section id="service" className={styles.section}>
      <div className="wrap">
        <span className={styles.eyebrow}>
          SERVICE<span className={styles.jp}>サービス内容</span>
        </span>
        <h2 className={styles.title}>
          提供するのは<br />「問い合わせされやすい見せ方」
        </h2>
        <p className={styles.lead}>
          ホームページそのものを売るのではなく、Web上の情報整理・信頼感・問い合わせ導線を整えます。
        </p>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.inc}`}>
            <h3>含まれること</h3>
            <ul>
              <li>1ページサイトの制作（スマホ最適化）</li>
              <li>サービス・強みの文章整理</li>
              <li>問い合わせ導線（電話ボタン・フォーム）</li>
              <li>Googleマップの埋め込み</li>
              <li>納品前の修正1回</li>
              <li>公開作業（独自ドメインは任意）</li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.exc}`}>
            <h3>行わないこと</h3>
            <ul>
              <li>SNS投稿の作成・運用代行</li>
              <li>MEO（マップ）順位の保証</li>
              <li>広告運用・写真撮影</li>
              <li>口コミの代筆・操作</li>
            </ul>
            <p className={styles.note}>
              ※「問い合わせが必ず増える」ことを保証するものではありません。Web上の見せ方と導線を整えるサービスです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
