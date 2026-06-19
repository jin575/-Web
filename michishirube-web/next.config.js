/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify ドロップで公開できる静的ファイルを出力する
  output: 'export',
  // 外部画像を使う場合は最適化を無効化（静的書き出し制約）
  images: { unoptimized: true },
};

module.exports = nextConfig;
