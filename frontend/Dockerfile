# Etapa 1: build do projeto com pnpm
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm run build

# Etapa 2: só entrega os arquivos do build
FROM alpine:3.18

WORKDIR /dist
COPY --from=build /app/dist .

CMD ["sh", "-c", "while true; do sleep 1000; done"]
