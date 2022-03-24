FROM node:16-alpine as builder
WORKDIR /usr/app
COPY ./package.json /usr/app
RUN npm install 
COPY ./ /usr/app

RUN yarn build

FROM nginx:1.17.8-alpine

COPY --from=builder /usr/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]