import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section id="mission" className={styles.section}>
      <div className={`wrap ${styles.head}`}>
        <div className={styles.title}>MISSION</div>
        <div className={styles.subtitle}>私たちの理念</div>
      </div>

      <div className={styles.panel}>
        <div className={`wrap ${styles.inner}`}>
          <div className={styles.photo}>
            <img
              src="/images/mission-consultation.png"
              alt="患者さんの不安を整理する相談風景"
            />
          </div>
          <div className={styles.body}>
            <h2 className={styles.lead}>
              <span>私たちは病気で悩む患者さんたちが</span>
              <span>安心して繋がれる道しるべとなります</span>
            </h2>
            <div className={styles.text}>
              <p>
                初めて院を探す患者さんは、先生の技術や想いを、最初から理解できるわけではありません。
              </p>
              <p>見ているのは、もっと手前の不安です。</p>
              <div className={styles.questions}>
                <span>「ここは自分の症状を見てくれそうか」</span>
                <span>「初めてでも行きやすいか」</span>
                <span>「予約はすぐできるか」</span>
              </div>
              <p>その不安が残っていると、患者さんは予約の前で止まってしまいます。</p>
              <p>
                そこで私たちは、先生の想いや院の強みを、患者さんの不安が消える順番に並べ替え、先生と患者さんが出会うまでの道しるべとなります。それが、私たち医療の道しるべの仕事です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
