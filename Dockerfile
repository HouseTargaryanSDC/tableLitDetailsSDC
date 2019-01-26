FROM node:11.0.0

WORKDIR /SDC/tableLitDetailsSDC

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9002

CMD ["npm", "start"]