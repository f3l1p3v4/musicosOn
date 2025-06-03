# Etapa 1: build
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir com NGINX
FROM nginx:alpine

# Copia o build para o diretório padrão do NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração do NGINX (ajuste o caminho se necessário)
COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf
