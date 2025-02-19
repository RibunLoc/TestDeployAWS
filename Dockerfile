FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:hydrogen-alpine3.21

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . ./

EXPOSE 8080
CMD [ "npm", "start" ]