FROM node:10
COPY . /var/host

WORKDIR /var/host
RUN npm install
EXPOSE 8081
CMD ["npm","start"]