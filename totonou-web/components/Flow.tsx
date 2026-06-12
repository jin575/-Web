import styles from './Flow.module.css';

const STEPS = [
  { title: '無料診断',        desc: '現状のWeb導線を確認し、改善点を整理してお見せします。' },
  { title: 'ご契約・お支払い', desc: '料金・納品範囲・修正回数をご確認のうえ着手します。' },
  { title: 'ヒアリング・制作', desc: '強みや掲載情報をうかがい、1ページサイトを制作します。' },
  { title: '確認・納品',       desc: '修正1回ののち公開。URLと操作説明をお渡しします。' },
];

export default function Flow() {
  return (
    <section id="flow" className={styles.section}>
      <div className="wrap">
        <span className={styles.eyebrow}>
          FLOW<span className={styles.jp}>ご利用の流れ</span>
        </span>
        <h2 className={styles.title}>無料相談から納品まで</h2>
        <p className={styles.lead}>
          まずは無料で、Web上で損している点を整理してお見せします。内容に納得いただいてからの契約です。
        </p>
        <div className={styles.flow}>
          {STEPS.map((step, i) => (
            <div key={i} className={styles.step}>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
