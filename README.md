<!-- 底下標籤來源參考寫法可至：https://github.com/Envoy-VC/awesome-badges#github-stats -->

![](https://img.shields.io/github/stars/kimnTai/freyja.svg)｜![](https://img.shields.io/github/forks/kimnTai/freyja.svg)｜![](https://img.shields.io/github/issues-pr/kimnTai/freyja.svg)｜![](https://img.shields.io/github/issues/kimnTai/freyja.svg)

## 功能

-   旅館飯店 Server

## 畫面

![](https://hackmd.io/_uploads/rkEnejF-p.png)

## 安裝

Node.js 版本建議為：`18.16.0` 以上

### 取得專案

```bash
git clone https://github.com/kimnTai/freyja.git
```

### 移動到專案內

```bash
cd freyja
```

### 安裝套件

```bash
yarn
```

### 環境變數設定

請在終端機輸入 `cp .env.example .env` 來複製 .env.example 檔案，並依據 `.env` 內容調整相關欄位。

### 運行專案

```bash
yarn dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3005/
```

## 環境變數說明

```env
PORT = 3005

DATABASE =  DB連結
DATABASE_PASSWORD = DB密碼

JWT_EXPIRES_DAY = token到期日
JWT_SECRET = Token密鑰

EMAILER_USER =
EMAILER_PASSWORD =
```

## Swagger

產生文件

```bash
yarn swagger-autogen
```

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3005/swagger
```

## 資料夾說明

```
freyja
├─ develop
│  ├─ swagger.js
│  └─ swagger_output.json
├─ src
│  ├─ app
│  ├─ controllers
│  ├─ middlewares
│  ├─ models
│  ├─ routes
│  ├─ utils
│  ├─ views
│  └─ vite-env.d.ts
├─ Dockerfile
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ yarn.lock
```

## 專案技術

-   node.js v20.8.1
-   vite v4.4.11
-   express v4.18.2
-   mongoose v7.6.2
-   jsonwebtoken v9.0.2

# Docker

```bash
docker build -t freyja:v1 .
docker run -p 3005:3005 -d freyja:v1
```
