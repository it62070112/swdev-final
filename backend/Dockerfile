FROM node:16.13.2-alpine
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY ./ .
EXPOSE 5000
CMD ["npm", "start"]