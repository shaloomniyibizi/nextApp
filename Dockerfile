FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@10.4.0
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev