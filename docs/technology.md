# 技術選定 — 最初の出会い

最初の検証は「空間を移動し、近づいたら相手が気づく」。本人が座標・距離・反応の関係を追って、一か所の変更をすぐ確かめられることを優先する。

| 候補 | 判断 |
| --- | --- |
| HTML / CSS / JavaScript | 採用。HTMLで作品への入口を置き、CSSで奥行きと身振りを表現し、JavaScriptで移動と距離を扱う。ファイルを直接開いて試せる。 |
| Vite + Vanilla JS / TS | モジュールが増えて、開発サーバーやビルドの価値が出たら再検討。 |
| Phaser | 複数の場面、ゲーム用カメラ、当たり判定の管理が必要になったら再検討。 |
| Three.js | 視点を回り込むことや立体物の前後関係が体験に必要になったら再検討。 |

操作点にはHTMLのボタン、距離には同一の座標系、身振りにはCSSのアニメーションを使う。動きを減らす設定では、静止ポーズで反応を示す。最初に本人が触る値は scene.js の GREETING_DISTANCE。

- [WHATWG HTML のフォーカスと入力](https://html.spec.whatwg.org/multipage/interaction.html)
- [MDN requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
- [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Vite 公式ガイド](https://vite.dev/guide/)
- [Phaser Scenes](https://phaser.io/oss/docs/phaser/concepts/scenes)
- [Three.js 公式リポジトリ](https://github.com/mrdoob/three.js)
