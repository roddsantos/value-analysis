FROM node:22.13.1 

WORKDIR /value-analysis

COPY package*.json ./
RUN npm install
EXPOSE 3000

COPY . . 
CMD ["npm", "start"]
