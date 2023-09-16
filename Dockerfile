FROM node:18.16.0

WORKDIR /app
COPY . .

ENV PORT=3005

RUN yarn
RUN yarn build

EXPOSE 3005

CMD ["yarn","start"]
