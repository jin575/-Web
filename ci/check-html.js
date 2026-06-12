// ととのうWeb サイト自動チェック
// 目的：本番に出る前に「HTMLの破損・inline JSの構文エラー・ローカルのリンク/画像切れ」を検知する。
// （2026/6 のファイル途中切れ事故の再発防止）
'use strict';
const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.toLowerCase().endsWith('.html'));
let failed = false;
const fail = (msg) => { console.error('❌ ' + msg); failed = true; };

if (htmlFiles.length === 0) {
  console.error('チェック対象のHTMLが見つかりませんでした。');
  process.exit(1);
}

for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf8');

  // 1) 途中切れガード：末尾に </html> があるか
  if (!/<\/html>\s*$/i.test(html.trim())) {
    fail(`${f}: 末尾に </html> がありません。ファイルが途中で切れている可能性があります。`);
  }

  // 2) inline <script> の構文チェック（src付きの外部スクリプトは除外）
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
  scripts.forEach((js, i) => {
    if (!js.trim()) return;
    try {
      new Function(js); // 実行はせず構文だけ検査
    } catch (e) {
      fail(`${f}: <script> #${i + 1} に構文エラー → ${e.message}`);
    }
  });

  // 3) ローカルのリンク/画像の存在チェック（href / src / CSSのurl()）
  const refs = [];
  for (const m of html.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)) refs.push(m[1]);
  for (const m of html.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) refs.push(m[1]);
  for (const ref of refs) {
    if (/^(https?:|mailto:|tel:|#|data:|\/\/)/i.test(ref)) continue; // 外部・特殊は対象外
    const p = ref.split('#')[0].split('?')[0];
    if (!p) continue;
    const target = p.replace(/^\.?\//, ''); // 先頭の ./ や / を除去してリポジトリ基準に
    if (!fs.existsSync(target)) {
      fail(`${f}: リンク/画像のローカルファイルが見つかりません → ${ref}`);
    }
  }
}

if (failed) {
  console.error('\nチェック失敗：上記を修正してから再度 push してください。');
  process.exit(1);
}
console.log('✅ すべてのチェックを通過しました（HTML破損なし・JS構文OK・ローカルリンク健全）。');
