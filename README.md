<!-- 底下標籤來源參考寫法可至：https://github.com/Envoy-VC/awesome-badges#github-stats -->

# 六角旅館 API 系統

![start](https://img.shields.io/github/stars/kimnTai/freyja.svg)｜
![forks](https://img.shields.io/github/forks/kimnTai/freyja.svg)｜
![issues-pr](https://img.shields.io/github/issues-pr/kimnTai/freyja.svg)｜
![issues](https://img.shields.io/github/issues/kimnTai/freyja.svg)

## 關於專案

- 六角學院的旅館 API 系統
- 注意事項：此專案沒有實作使用者權限機制，因此只要取得 Token 都可以打 CRUD API

## API 串接範例

```js
fetch('http://localhost:3005/api/v1/home/news', { method: 'GET' })
    .then(response => response.json())
    .then(res => {
        // { status: 'true', result: [{...}] }
        console.log(res);
    });
```

## 畫面

![畫面](https://hackmd.io/_uploads/rkEnejF-p.png)

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
npm install
```

### 環境變數設定

請在終端機輸入 `cp .env.example .env` 來複製 .env.example 檔案，並依據 `.env` 內容調整相關欄位。

### 環境變數範例與說明

> 底下皆為假的資料，請依照自己的資料來設定

```bash
# 環境變數，區分開發環境或正式環境(development、production)
NODE_ENV = "development"

# 伺服器埠號
PORT = 3005

# MongoDB 連結
DATABASE = "mongodb+srv://example:<password>@cluster0.xqonzdp.mongodb.net/"
# MongoDB 密碼
DATABASE_PASSWORD = "yoaymj3C474VsrysWLp3"

# JTW Token 到期日
JWT_EXPIRES_DAY = "7d"
# JTW Token 密鑰
JWT_SECRET = "hexschool"

# Gmail 帳號
EMAILER_USER = "example@gmail.com"
# Gmail 應用程式密碼
EMAILER_PASSWORD = "dwuq asxf dowp pidw"
```

### 取得 EMAILER_PASSWORD

若需要使用 Email 服務，需取得 EMAILER_PASSWORD。

此專案有使用 Nodemailer 套件，預設使用 Gmail 寄信，可以參考「[Node.js 應用篇 - 使用 Nodemailer 來發送 Email](https://israynotarray.com/nodejs/20230722/1626712457/)」 來取得 EMAILER_PASSWORD 應用程式密碼。

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3005/
```

## Swagger

> 當你還原專案時，就已經自動產生 Swagger 文件了。

產生 Swagger 文件

```bash
npm run swagger-autogen
```

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3005/swagger
```

- 參考資料 : [使用 Swagger 自動生成 API 文件](https://israynotarray.com/nodejs/20201229/1974873838/)

## 資料夾說明

```txt
freyja
├─ develop                  // 開發工具、腳本
│  ├─ build.js              // 使用 esbuild 來編譯、打包專案
│  ├─ swagger.js            // 產生 Swagger 文件
│  └─ swagger_output.json   // Swagger 文件，會由 swagger.js 產生
├─ public                   // 靜態資源放置處
├─ src
│  ├─ app                   // 入口點
│  ├─ controllers           // 控制器
│  ├─ middlewares           // 中間件
│  ├─ models                // 資料庫模型
│  ├─ routes                // 路由
│  ├─ utils                 // 工具
│  └─ reference.d.ts        // 全局型別定義
├─ .env.example             // 環境變數範例
├─ .gitignore               // Git 忽略檔案
├─ .prettierrc.json         // Prettier 設定檔
├─ Dockerfile               // Docker 設定檔
├─ package-lock.json
├─ package.json
└─ tsconfig.json
```

## 專案技術

- node.js v20.8.9
- tsx v3.14.0
- esbuild v0.19.5
- express v4.18.2
- mongoose v7.6.3
- jsonwebtoken v9.0.2

## 專案指令列表

```bash
# 開發指令 : 使用 tsx watch 來監聽檔案變化，並且自動編譯成 js 檔案，適用於開發環境
npm run dev

# 打包指令 : 使用 esbuild 來編譯、打包專案，適用於正式環境
npm run build

# 啟動指令 : 使用 node 來啟動專案，適用於正式環境
npm run start

# 產生 Swagger 文件指令 : 用來產生 Swagger 文件
npm run swagger-autogen
```

## Docker

本專案可以使用 Docker，只需要使用以下指令

```bash
# 使用 Docker 建立一個名為 "freyja:v1" 的容器映像
docker build -t freyja:v1 .

# 運行一個名為 "freyja:v1" 的容器，將容器內部的端口 3005 映射到主機的端口 3005
# 同時以後台模式運行容器
docker run -p 3005:3005 -d freyja:v1
```

## Render 部署教學

1. 註冊 [Render](https://render.com/) 帳號
2. 登入後，點擊右上 New + 選擇 Web Service 來新增網路服務

    ![Web Service](https://i.imgur.com/uKEJwhz.png)

3. 進入「Create a new Web Service」的畫面，然後就在「Connect a repository」找到此專案。

    在「Connect a repository」區塊選擇你要部署的專案，並按下 「Connect」 按鈕。

    ![Connect a repository](https://firebasestorage.googleapis.com/v0/b/welcomewebworld-4097b.appspot.com/o/blogImg%2Fother%2Fheroku-to-render%2FNew_Web_Service_%E3%83%BB_Render_Dashboard.jpg?alt=media&token=8d1e3606-5f82-4b63-bca4-30ea4a3f9965)

    若專案沒有出現在列表上，可以點選旁邊的「Configure account」進入到 GitHub 頁面給予權限，原因是帳號在註冊時沒有給予 Render 權限，可以在這邊重新給予權限

    ![Configure account](https://firebasestorage.googleapis.com/v0/b/welcomewebworld-4097b.appspot.com/o/blogImg%2Fother%2Fheroku-to-render%2F%E6%88%AA%E5%9C%96%202022-12-13%2010.47.49.png?alt=media&token=9a0c3f6a-aa03-4bf8-abc2-27c6419e0ec8)
    ![Configure account](https://firebasestorage.googleapis.com/v0/b/welcomewebworld-4097b.appspot.com/o/blogImg%2Fother%2Fheroku-to-render%2FInstalled_GitHub_App_-_Render.jpg?alt=media&token=7650194e-c74f-4920-9343-f70fba0b7124)

4. 主機設定，建議選擇 Docker 做為佈署環境，相關設定已撰寫於 Dockerfile

    ![Dockerfile](https://i.imgur.com/QdjHB8g.png)

5. 找到 「Add Environment Variable」 按鈕，新增環境變數

    ![Add Environment Variable](https://firebasestorage.googleapis.com/v0/b/welcomewebworld-4097b.appspot.com/o/blogImg%2Fother%2Fheroku-to-render%2F%E6%88%AA%E5%9C%96%202022-12-13%2011.00.24.png?alt=media&token=4129ad15-4c8e-441a-9f1e-4906484ab1c1)
    ![Add Environment Variable](https://i.imgur.com/cv5qvbl.png)

6. 按下「Create Web Service」，可看到專案正在被部署到 Render

    ![Create Web Service](https://firebasestorage.googleapis.com/v0/b/welcomewebworld-4097b.appspot.com/o/blogImg%2Fother%2Fheroku-to-render%2F%E6%88%AA%E5%9C%96%202022-12-13%2011.05.41.png?alt=media&token=0aee9ac2-b10d-4143-9528-0ff68167d464)

    出現 `Your service is live 🎉` 時即佈署完成

    ![Create Web Service](https://i.imgur.com/n2a7TXm.png)

    點擊上方網址，確認專案是否正常運作

    ![Create Web Service](https://firebasestorage.googleapis.com/v0/b/welcomewebworld-4097b.appspot.com/o/blogImg%2Fother%2Fheroku-to-render%2F%E6%88%AA%E5%9C%96%202022-12-13%2011.08.37.png?alt=media&token=c3033e12-aa4b-411b-b7d9-0ae8f6b66c2e)

- 參考資料 : [關於從 Heroku 跳到 Render 這件事情](https://israynotarray.com/other/20221213/3036227586/)

## 補充資源

- [Mac OS X 安裝 nvm](https://israynotarray.com/nodejs/20200124/3404456418/)
- [Windows 10 安裝並使用 nvm 切換 NodeJS 版本](https://israynotarray.com/nodejs/20200107/3738078915/)
- [Node.js 應用篇 - 使用 Nodemailer 來發送 Email](https://israynotarray.com/nodejs/20230722/1626712457/)
- [使用 SSH 連接/上傳到你的 GitHub(Ed25519)](https://israynotarray.com/git/20210709/1381487661/)
- [Node.js 實戰密技大統整（套件運用、金流、第三方登入、雲服務、Docker）](https://www.casper.tw/development/2023/10/15/ironman-collection/)
- [《Node.js 不負責系列：把前端人員當作後端來用，就算是前端也能嘗試寫的後端～原來 Node.js 可以做這麼多事～》](https://ithelp.ithome.com.tw/articles/10339734)
- [被迫吃芒果的前端工程師](https://israynotarray.com/nodejs/20220416/2123631571/)
