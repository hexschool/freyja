# 選擇 Node.js 的基礎映像檔
FROM node:18

# 設置工作目錄，WORKDIR 是 Dockerfile 的指令，用來設置在容器內部用於存儲應用程式檔案的目錄。
WORKDIR /app
COPY . .

ENV PORT=3005

# 安裝套件
# RUN 指令用於在映像檔構建階段執行命令，並創建新的層。每個 RUN 指令都會在當前映像檔的頂部創建一個新的層並提交更改，進而形成新的映像檔。
RUN yarn

# 建立 Swagger 文件
RUN yarn swagger-autogen

RUN yarn build

# 暴露應用程式所使用的端口
EXPOSE 3005

# 啟動您的應用程式
# CMD 指令用於指定一個容器啟動時需要執行的命令。每個 Dockerfile 只能包含一個 CMD 指令。
# 總結來說，RUN 是在構建映像檔時執行的命令，而 CMD 是在容器啟動時執行的命令。
CMD ["yarn","start"]
