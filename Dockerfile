FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# TODO: Add multi-stage build for smaller image size
# TODO: Add non-root user for security
# TODO: Add health check