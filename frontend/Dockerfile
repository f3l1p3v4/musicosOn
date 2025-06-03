# frontend/Dockerfile

FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: container só para gerar build (sem nginx aqui)
FROM alpine:3.18
WORKDIR /dist
COPY --from=build /app/dist .

CMD ["sh", "-c", "while true; do sleep 1000; done"]
