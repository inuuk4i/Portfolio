# 技術選定 — 最初の出会い

最初の検証は「空間を移動し、近づいたら相手が気づく」。本人が座標・距離・反応の関係を追って、一か所の変更をすぐ確かめられることを優先する。

| 候補 | 判断 |
| --- | --- |
| HTML / CSS / JavaScript | 初版で距離と反応のつながりを検証した。 |
| Vite + TypeScript | 採用。Node.js で開発サーバーを動かし、保存後すぐ修正を試せる。座標や入力の型はビルド時に確認する。 |
| Next.js | 作品詳細ページが増えて共通のページ構成やメタデータが必要になったとき、またはサーバー処理が必要になったときに再検討。 |
| Phaser | 複数の場面、ゲーム用カメラ、当たり判定の管理が必要になったら再検討。 |
| Three.js | 視点を回り込むことや立体物の前後関係が体験に必要になったら再検討。 |

操作点にはHTMLのボタン、距離には同一の座標系、身振りにはCSSのアニメーションを使う。動きを減らす設定では、静止ポーズで反応を示す。最初に本人が触る値は scene.ts の GREETING_DISTANCE。

- [WHATWG HTML のフォーカスと入力](https://html.spec.whatwg.org/multipage/interaction.html)
- [MDN requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
- [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Vite 公式ガイド](https://vite.dev/guide/)
- [Phaser Scenes](https://phaser.io/oss/docs/phaser/concepts/scenes)
- [Three.js 公式リポジトリ](https://github.com/mrdoob/three.js)
- [GitHub Octoverse 2026](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)
- [Node.js の概要](https://nodejs.org/en/about)
- [Next.js の概要](https://nextjs.org/docs)
