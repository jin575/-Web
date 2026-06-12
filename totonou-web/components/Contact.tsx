'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypotフィールドに値があればボット送信 → 何もせず終了
    if (data.get('_gotcha')) return;

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className={styles.section}>
        <div className="wrap">
          <div className={styles.thanks}>
            <p className={styles.thanksTitle}>送信が完了しました</p>
            <p className={styles.thanksText}>お問い合わせありがとうございます。2〜3営業日以内にご連絡いたします。</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <span className={styles.eyebrow}>
          CONTACT<span className={styles.jp}>無料相談・お問い合わせ</span>
        </span>
        <h2 className={styles.title}>まずは無料の診断から</h2>
        <p className={styles.lead}>
          「自分の店はWeb上でどこを損しているのか」を無料で整理してお伝えします。お気軽にご相談ください。
        </p>

        {/* netlify属性でNetlifyフォームとして登録 */}
        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="_gotcha"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* honeypotフィールド：ボットは自動入力するが人間には見えない */}
          <div className={styles.honeypot}>
            <label>このフィールドは空白のまま<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
          </div>

          <div className={styles.field}>
            <label htmlFor="name">
              お名前 / 屋号<span className={styles.req}>*</span>
            </label>
            <input id="name" type="text" name="name" placeholder="例：〇〇整体院 山田太郎" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">
              メールアドレス<span className={styles.req}>*</span>
            </label>
            <input id="email" type="email" name="email" placeholder="例：info@example.com" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="type">業種</label>
            <select id="type" name="type">
              <option>整体院・整骨院</option>
              <option>鍼灸院</option>
              <option>小規模医院・クリニック</option>
              <option>その他</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">ご相談内容</label>
            <textarea id="message" name="message" placeholder="現在のサイトのURLや、お困りごとがあればご記入ください。" />
          </div>
          <p className={styles.privacyNote}>
            送信内容は<a href="/privacy" className={styles.privacyLink}>プライバシーポリシー</a>に基づき取り扱います。
          </p>
          <button type="submit" className={styles.btnSubmit}>
            無料診断を申し込む
          </button>
          <p className={styles.formNote}>
            お電話でのご相談：〔　電話番号　〕（受付〔　時間　〕）
          </p>
        </form>
      </div>
    </section>
  );
}
