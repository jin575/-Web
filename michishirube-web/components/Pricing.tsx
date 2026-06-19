import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="price" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            PRICE<span className={styles.jp}>料金</span>
          </span>
          <h2 className={styles.title}>分かりやすい一律料金</h2>
          <p className={styles.lead}>
            追加費用が分かりにくい、ということがないように。入口は一律30,000円。含むもの・含まないものを最初に明記します。
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.priceHero}>
            <div className={styles.label}>初回サイト制作パック</div>
            <div className={styles.amount}>
              30,000<small>円（税込）</small>
            </div>
            <div className={styles.note}>1ページサイト・問い合わせ導線・修正1回 込み</div>
          </div>

          <div className={styles.priceBody}>
            <div className={styles.priceRow}>
              <div className={`${styles.priceCol} ${styles.inc}`}>
                <h4>料金に含むもの</h4>
                <ul>
                  <li>1ページサイト制作</li>
                  <li>文章整理・構成</li>
                  <li>問い合わせ導線（電話/フォーム）</li>
                  <li>Googleマップ埋め込み</li>
                  <li>納品前修正 1回</li>
                  <li>公開作業</li>
                </ul>
              </div>
              <div className={`${styles.priceCol} ${styles.exc}`}>
                <h4>含まないもの</h4>
                <ul>
                  <li>SNS投稿の作成・運用</li>
                  <li>月次運用・順位保証</li>
                  <li>広告運用・写真撮影</li>
                  <li>大幅な追加ページ</li>
                </ul>
              </div>
            </div>

            <div className={styles.priceExtra}>
              <table>
                <thead>
                  <tr><th>追加で必要になった場合</th><th></th></tr>
                </thead>
                <tbody>
                  <tr><td>納品後7日以内の軽微修正</td><td className={styles.amt}>1回無料</td></tr>
                  <tr><td>スポット修正（文言追加・写真差し替え等）</td><td className={styles.amt}>3,000円〜</td></tr>
                  <tr><td>追加ページ（事例・スタッフ紹介など）</td><td className={styles.amt}>10,000円〜</td></tr>
                  <tr><td>ドメイン・メール等の外部実費</td><td className={styles.amt}>顧客負担</td></tr>
                </tbody>
              </table>
              <p className={styles.fine}>
                ※ ドメイン・有料機能・決済サービス等の外部実費はお客様のご負担となります。<br />
                ※ 修正は原則1回まで。構成変更・デザイン全面変更は追加料金の対象です。<br />
                ※ 本サービスは成果（問い合わせ数・順位）を保証するものではありません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
