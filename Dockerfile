FROM node:alpine
WORKDIR /app
RUN apk --no-cache add curl
RUN node -v
COPY package.json .
COPY tsconfig.json . 
COPY ./api ./api
COPY config.ts .
RUN npm install node-pre-gyp
RUN npm install -g typescript
RUN npm i
RUN npm run build:ts
EXPOSE 3200
CMD [ "npm", "start" ]