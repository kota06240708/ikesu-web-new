# gulp-boilerplate

gulp を使った開発環境です

## Overview

gulp (PUG + sass) + webpack v4 (TypeScript)

- [**gulp**](https://github.com/gulpjs/gulp)
  - [PUG](https://github.com/pugjs/pug)
  - [Sass](https://sass-lang.com/)
  - [PostCSS](https://github.com/postcss)
- [**webpack**](https://github.com/webpack/webpack)
  - [TypeScript](https://github.com/babel/babel)

> js の処理は webpack で行い、それ以外は gulp を使って処理をしています。

## Install

yarn を使うので下記に従い yarn インストールしてください。

```bash
$ brew install yarn
```

## Build Setup

```bash
# 依存モジュールをインストール。
$ yarn install

# 開発開始
$ yarn start

# 本番環境生成
$ yarn build

# 本番環境デバック
$ yarn browser
```

開発をする際、`yarn start`をして頂き、[http://localhost:8080](http://localhost:8080) にブラウザにアクセスすればデバックできます。

`yarn build`で production フォルダ内に納品ファイルが生成されます。

## Structure

```sh
.
├── dist                # 静的ファイル書出先
├── icon                # アイコンフォントを生成するファイル
├── production          # 本番環境向けのファイル書出先
├── src                 # 実際に手を動かすファイル
└── system              # ビルド環境
```

## barba.js
[https://www.willstyle.co.jp/blog/3055/](https://www.willstyle.co.jp/blog/3055/)
[https://qiita.com/miwashutaro0611/items/bc4cf66bef3a825ace1c](https://qiita.com/miwashutaro0611/items/bc4cf66bef3a825ace1c)

## 管理画面
[https://89-studio.microcms.io/apis/product](https://89-studio.microcms.io/apis/product)

## API SCHEMA

**Base URL: https://89-studio.microcms.io/api/v1**

### /product

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **id** | *string* | product id | `"hjbgj"` |
| **title** | *string* | プロダクトタイトル | `"案件名"` |
| **image** | *string* | プロダクト画像 | `"http://example.com/example.png"` |
| **role** | *string* | 案件役割 | `"エンジニア"` |
| **type** | *string* | 案件の種類 | `"web"` |
| **description** | *string* | 案件の詳細 | `"案件の詳細"` |
| **movie** | *string* | youthube ID | `"sshhgwhj"` |
| **movieText** | *string* | 動画の詳細 | `"動画の詳細"` |
| **body** | *body[]* | 案件概要 | |
| **client** | *string* | クライアント | `"クライアント"` |
| **category** | *string* | カテゴリー | `"カテゴリー"` |
| **field** | *string* | 分野 | `"分野"` |
| **member** | *string* | メンバー | `"メンバー"` |


#### body 

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **description** | *string* | コンテンツ詳細 | `"コンテンツ詳細"` |
| **image** | *string* | コンテンツ画像 | `"http://example.com/example.png"` |
| **imagePosition** | *string* | 画像の位置 | `left` |

---

### /auth

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **id** | *string* | product id | `"hjbgj"` |
| **isAuth** | *boolean* | 認証有りにするのかの有無 | `true` |

---

### /master

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **id** | *string* | product id | `"hjbgj"` |
| **name** | *string* | 名前 | `名前` |
| **image** | *string* | 画像 | `http://example.com/example.png` |
| **role** | *string* | 役割 | `役割` |
| **description** | *string* | 自己紹介 | `自己紹介` |
| **contact** | *string* | 連絡先 | `連絡先` |

---

### /member

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **id** | *string* | product id | `"hjbgj"` |
| **name** | *string* | 名前 | `名前` |
| **image** | *string* | 画像 | `http://example.com/example.png` |
| **role** | *string* | 役割 | `役割` |

