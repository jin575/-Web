import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '集客導線ラボ｜地域の整体院・整骨院・医院のWeb集客導線を整えます',
  description:
    '口コミは良いのにWebからの問い合わせが伸びない。集客導線ラボは地域の整体院・整骨院・鍼灸院・小規模医院のWeb集客導線を整えるサービスです。初回サイト制作30,000円。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
