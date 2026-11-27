# Portfolio
僕という人間がすべて詰まったポートフォリオ

## 試作を触る

Node.js 24 と pnpm 11 を用意し、リポジトリのフォルダーで `pnpm install`、`pnpm dev` の順に実行する。表示されたローカル URL をブラウザで開く。タップ・クリック・方向キーで広場を移動できる。

最初に自分で触る場所は `scene.ts` 冒頭の `GREETING_DISTANCE`。たとえば `16` を `22` に変え、保存する。相手がどこで手を振り始めるかを見比べる。

`pnpm build` で型を確認し、配信用ファイルを `dist/` に生成する。

- [ポートフォリオ企画メモ](docs/concept.md)
- [技術選定](docs/technology.md)
