FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN apk add --no-cache python3 make g++
RUN npm i
CMD ["npm", "run", "start"]
