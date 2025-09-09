FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g qrcode-terminal pm2

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
