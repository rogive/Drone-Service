FROM node:latest

WORKDIR /usr/src/

COPY . .

RUN npm install --production
RUN npm run build
RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "build"]
