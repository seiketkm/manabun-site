
# Manabun

以下のフレームワークおよびライブラリを使用して構築されています:

- **Next.js**: アプリケーションのルーティングとサーバサイドレンダリングを管理
- **TypeScript**: 型付けによるJavaScriptの拡張
- **Chakra UI**: モダンなUIコンポーネントライブラリ
- **Storybook**: UIコンポーネントのドキュメント化とテスト
- **ESLint**: JavaScriptとTypeScriptのコード品質とスタイルのチェック
- **Prettier**: コードフォーマットツール

## セットアップ

以下の手順で依存関係をインストールし，開発サーバを起動してください．

```bash
npm install
npm run dev
```

アプリケーションは[http://localhost:3000](http://localhost:3000)でブラウザからアクセス可能です．

## ビルド方法

以下のコマンドでアプリケーションをビルドし，本番環境用サーバを起動します．

```bash
npm run build
npm start
```

ビルド後，アプリケーションは[http://localhost:3000](http://localhost:3000)で確認できます．

## Storybookの利用

以下のコマンドでStorybookを起動し，UIコンポーネントをブラウザで確認できます．

```bash
npm run storybook
```

Storybookは[http://localhost:6006](http://localhost:6006)でアクセス可能です．

## カスタマイズ

### ビルド設定

```javascript
const nextConfig = {
  output: 'export',
};
```

