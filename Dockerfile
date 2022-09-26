FROM node:16

# Set Variables de entorno
ENV DB_HOST="172.17.0.1" \
    DB_PORT="5440" \
    DB_USERNAME="postgres" \
    DB_PSSWD="mysecretpassword" \
    DB_NAME="postgres" \
    AUTH_KEY="8795y9t7835ru7935rf3jrd43d4r932sk34rjo4ygh9d"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]