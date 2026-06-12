import styles from './privacy.module.css';

export const metadata = {
  title: 'プライバシーポリシー｜集客導線ラボ',
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <h1 className={styles.title}>プライバシーポリシー</h1>
        <p className={styles.updated}>最終更新日：〔　年月日　〕</p>

        <section className={styles.section}>
          <h2>1. 事業者情報</h2>
          <p>
            屋号：集客導線ラボ<br />
            運営者：〔　運営者氏名　〕<br />
            お問い合わせ：〔　メールアドレス　〕
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. 取得する個人情報</h2>
          <p>当サイトのお問い合わせフォームにて、以下の情報を取得します。</p>
          <ul>
            <li>お名前・屋号</li>
            <li>メールアドレス</li>
            <li>業種</li>
            <li>ご相談内容</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. 利用目的</h2>
          <p>取得した個人情報は、以下の目的のみに利用します。</p>
          <ul>
            <li>お問い合わせへの回答・ご連絡</li>
            <li>サービス提供に関する連絡</li>
          </ul>
          <p>上記以外の目的での利用、および第三者への提供は行いません。</p>
        </section>

        <section className={styles.section}>
          <h2>4. 個人情報の管理</h2>
          <p>
            取得した個人情報は適切に管理し、不正アクセス・紛失・漏洩・改ざん等が生じないよう合理的な安全対策を講じます。ご本人の同意なく第三者に提供することはありません（法令に基づく場合を除く）。
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. 開示・訂正・削除のご要望</h2>
          <p>
            ご自身の個人情報の開示・訂正・削除を希望される場合は、上記お問い合わせ先までご連絡ください。本人確認のうえ、合理的な期間内に対応いたします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. ポリシーの変更</h2>
          <p>
            本ポリシーは必要に応じて改訂することがあります。変更後の内容はこのページに掲載し、最終更新日を更新します。
          </p>
        </section>

        <div className={styles.back}>
          <a href="/">← トップページに戻る</a>
        </div>
      </div>
    </main>
  );
}
