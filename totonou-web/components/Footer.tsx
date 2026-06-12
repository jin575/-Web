'use client';

import styles from './Footer.module.css';

// メールアドレスをbotから守るためJavaScriptで組み立てる
// 実際のメールアドレスに差し替えるときはこの2変数を編集する
const MAIL_USER = '〔メールユーザー名〕';   // 例: info
const MAIL_HOST = '〔ドメイン〕';           // 例: example.com

export default function Footer() {
  const handleMailClick = () => {
    window.location.href = `mailto:${MAIL_USER}@${MAIL_HOST}`;
  };

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <div className={styles.brand}>集客導線ラボ</div>
          地域事業者のWeb集客導線改善
        </div>
        <div>
          〔　運営者名　〕<br />
          お問い合わせ：
          {/* メールはボタンクリック時だけアドレスを組み立てる（HTMLソースに載らない） */}
          <button onClick={handleMailClick} className={styles.mailBtn}>
            メールで相談
          </button>
          {' / '}〔　電話　〕
        </div>
      </div>
    </footer>
  );
}
