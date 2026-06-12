import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section id="mission" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.photo}>
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
            alt="施術の様子（仮画像・差し替え予定）"
          />
        </div>
        <div className={styles.body}>
          <span className={styles.eyebrow}>
            MISSION<span className={styles.jp}>私たちの考え</span>
          </span>
          <p className={styles.big}>
            「いい仕事をしているお店」が、<br />
            Webのせいで選ばれないのは、もったいない。
          </p>
          <p>
            口コミや評判が良くても、Web上の見せ方が古かったり、問い合わせ方法が分かりにくかったりするだけで、来院につながらないことがあります。私たちは、新しく作り込むより前に「いまある良さがちゃんと伝わる導線」を整えることを大切にしています。
          </p>
          <p>
            順位や問い合わせ数を保証することはしません。できるのは、Web上で損している部分を見つけ、誠実に分かりやすく整えること。その積み重ねが、結果につながると考えています。
          </p>
        </div>
      </div>
    </section>
  );
}
