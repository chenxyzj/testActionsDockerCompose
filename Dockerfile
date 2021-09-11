FROM  node:14.17.3-alpine
WORKDIR /home/node/app
COPY app .
RUN npm config set registry https://registry.npm.taobao.org
RUN  npm install
CMD npm run app