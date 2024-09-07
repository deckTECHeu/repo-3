FROM node:18-alpine3.15
EXPOSE 8080
COPY server.js .
CMD node server.js
