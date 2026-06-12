import Header   from '@/components/Header';
import Hero     from '@/components/Hero';
import Mission  from '@/components/Mission';
import Carousel from '@/components/Carousel';
import Service  from '@/components/Service';
import Pricing  from '@/components/Pricing';
import Flow     from '@/components/Flow';
import Contact  from '@/components/Contact';
import Footer   from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* たたき台バー：本番公開前に削除 */}
      <div style={{
        background: '#fff6e5',
        borderBottom: '1px solid #f0d9a8',
        color: '#8a6d2f',
        fontSize: '0.85rem',
        textAlign: 'center',
        padding: '9px 16px',
        lineHeight: 1.6,
      }}>
        これはたたき台です。写真は無料素材（Unsplash）の仮画像、〔　〕の箇所はあなたの実際の情報に差し替えます。
      </div>

      <Header />
      <main>
        <Hero />
        <Mission />
        <Carousel />
        <Service />
        <Pricing />
        <Flow />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
