# Development Stage 
FROM node:10.15.0 AS builder

ARG SASS_PATH
ARG REACT_APP_DOMAIN_SAMPLE_API
ARG REACT_APP_DOMAIN_COOKIE
ARG REACT_APP_BACKEND_API

WORKDIR /app/admin-cms

ENV PATH /app/admin-cms/node_modules/.bin:$PATH

COPY package.json /app/admin-cms/package.json

RUN npm install -g react-scripts 

RUN npm install -f node-sass 
 
RUN npm install 
 
COPY . /app/admin-cms
 
RUN env 
 
RUN npm run build 
 
EXPOSE 3000