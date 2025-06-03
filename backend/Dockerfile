FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
COPY . .

# Gere o cliente Prisma
RUN npx prisma generate

# Compile o TypeScript
RUN npm run build

# Etapa final
FROM node:20
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

CMD ["node", "dist/index.js"]

