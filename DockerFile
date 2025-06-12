# Etapa 1: build
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: produção
FROM node:20
WORKDIR /app
COPY --from=build /app ./
RUN npm install --omit=dev
ENV NODE_ENV=production
EXPOSE 3333
CMD ["node", "dist/index.js"]
